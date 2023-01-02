import React, {useEffect, useState} from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {AlcoholsObject} from '../../@types/alcohol';
import {CategoriesObject, ICategory} from '../../@types/category';
import {
  ICategoryFilter,
  IFetchCategoryFilter,
  IFilter,
} from '../../@types/filters';
import {API, URL} from '../../utils/constant';
import {get, post} from '../../utils/fetch';
import useQueryParams from '../../utils/hooks/useQueryParams';
import SearcherLogic from './Searcher.logic';
import {getCookie, setCookie} from '../../utils/cookies';

interface Props {
  show: boolean;
  handleShow: (state?: boolean) => void;
}

const SearcherApollo = ({show, handleShow}: Props) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filters, setFilters] = useState<IFetchCategoryFilter[]>([]);
  const [choosenFilter, setChoosenFilter] = useState<ICategoryFilter | null>(
    null,
  );
  const [total, setTotal] = useState<number>(0);
  const [phrase, setPhrase] = useState<string>('');
  const {query} = useQueryParams();

  const getFilterFromQuery = (
    name: string,
    value?: string,
    isLastSearch?: boolean,
  ) => {
    const filterObject = isLastSearch
      ? (getCookie('lastSearch') as {[k: string]: string})
      : query;
    if (name === 'kind') {
      if (!filterObject.kind) return 'all';
      return filterObject.kind;
    }

    if (!filterObject.filters && value) return '';
    if (!filterObject.filters) return {};

    const rawFilters = JSON.parse(decodeURIComponent(filterObject.filters)) as {
      name: string;
      display_name: string;
      values: {value: string; selected: boolean}[];
    }[];

    const rawFilter = rawFilters.find(filter => filter.name === name);
    if (!rawFilter && value) return '';
    if (!rawFilter) return {};
    if (value) return rawFilter.values.find(v => v.value === value);
    return rawFilter;
  };

  const chooseCategoryFilters = (
    category: string,
    preFilters?: IFetchCategoryFilter[],
    isInit?: boolean,
    isLastSearch?: boolean,
  ) => {
    const queryKind = getFilterFromQuery('kind', undefined, isLastSearch);
    const aFilters = preFilters || filters;
    const oFilter = aFilters.find(filter => {
      if (isInit && filter.value === queryKind) return true;
      if ((!isInit || !queryKind) && filter.value === category) return true;
      return false;
    });
    if (!oFilter) return setChoosenFilter(null);
    const categoryFilter: IFilter[] = oFilter.filters.reduce<IFilter[]>(
      (prev, curr) => {
        const values = curr.values.map(value => {
          const isSelected = getFilterFromQuery(curr.name, value, isLastSearch);
          return {value, selected: !!(isInit && isSelected)};
        });
        return [...prev, {...curr, values}];
      },
      [],
    );
    setChoosenFilter({...oFilter, filters: categoryFilter});
    return null;
  };

  const getBody = (): {[k: string]: string[] | string} => {
    const kind: {} | {kind: string} =
      !choosenFilter?.value || choosenFilter?.value === 'all'
        ? {}
        : {kind: choosenFilter.value};
    const selectedFilters = choosenFilter?.filters.reduce<
      {name: string; values: string[]; display_name: string}[]
    >((prev, curr) => {
      const values = curr.values.reduce<string[]>((prevValues, value) => {
        if (value.selected) return [...prevValues, value.value];
        return prevValues;
      }, []);
      if (values.length === 0) return prev;
      return [...prev, {...curr, values}];
    }, []);
    if (!selectedFilters || selectedFilters.length === 0) return {...kind};
    const body = selectedFilters.reduce<{
      [k: string]: string[];
    }>(
      (prev, curr) => ({
        ...prev,
        [curr.name]: curr.values,
      }),
      {},
    );
    return {
      ...body,
      ...kind,
    };
  };

  const getTotal = () => {
    const search = phrase ? `&phrase=${phrase}` : '';
    post({
      header: {
        'Content-Type': 'application/json',
      },
      url: `${API}${URL.GET_ALCOHOL}?&offset=0&limit=1${search}`,
      body: JSON.stringify({...getBody()}),
    })
      .then(value => value.json())
      .then((value: AlcoholsObject) => setTotal(value.page_info.total));
  };

  const search = () => {
    handleShow(false);
    const queryFilters = choosenFilter?.filters.map(filter => {
      const values = filter.values.filter(value => value.selected);
      return {...filter, values};
    });
    const paramObject = {
      phrase,
      filters: encodeURIComponent(JSON.stringify(queryFilters)),
      kind: choosenFilter?.value || '',
    };
    const params = createSearchParams(paramObject);
    setCookie('lastSearch', JSON.stringify(paramObject));
    navigate(`/alcohols?${params}`);
  };

  useEffect(() => {
    getTotal();
  }, [choosenFilter?.value, choosenFilter?.filters, phrase]);

  useEffect(() => {
    get({
      url: `${API}${URL.GET_CATEGORIES}?limit=0`,
    })
      .then(value => value.json())
      .then((value: CategoriesObject) => setCategories(value.categories || []));
    get({
      url: `${API}${URL.GET_FILTERS}`,
    })
      .then(value => value.json())
      .then((value: {filters: IFetchCategoryFilter[]}) => {
        setFilters(value.filters || []);
        chooseCategoryFilters('all', value.filters, true);
      });
  }, [JSON.stringify(query)]);
  return (
    <SearcherLogic
      show={show}
      handleShow={handleShow}
      categories={categories}
      filters={choosenFilter}
      chooseCategoryFilters={chooseCategoryFilters}
      setChoosenFilter={setChoosenFilter}
      total={total}
      search={search}
      setPhrase={setPhrase}
    />
  );
};

export default SearcherApollo;
