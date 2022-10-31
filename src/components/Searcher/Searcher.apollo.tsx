import React, {useEffect, useState} from 'react';
import {CategoriesObject, ICategory} from '../../@types/category';
import {
  ICategoryFilter,
  IFetchCategoryFilter,
  IFilter,
} from '../../@types/filters';
import {API, URL} from '../../utils/constant';
import {get} from '../../utils/fetch';
import SearcherLogic from './Searcher.logic';

interface Props {
  show: boolean;
  handleShow: () => void;
}

const SearcherApollo = ({show, handleShow}: Props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filters, setFilters] = useState<IFetchCategoryFilter[]>([]);
  const [choosenFilter, setChoosenFilter] = useState<ICategoryFilter | null>(
    null,
  );

  const chooseCategoryFilters = (
    category: string,
    preFilters?: IFetchCategoryFilter[],
  ) => {
    const aFilters = preFilters || filters;
    const oFilter = aFilters.find(filter => filter.value === category);
    if (!oFilter) return setChoosenFilter(null);
    const categoryFilter: IFilter[] = oFilter.filters.reduce<IFilter[]>(
      (prev, curr) => {
        const values = curr.values.map(value => ({value, selected: false}));
        return [...prev, {...curr, values}];
      },
      [],
    );
    setChoosenFilter({...oFilter, filters: categoryFilter});
    return null;
  };

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
        chooseCategoryFilters('all', value.filters);
      });
  }, []);
  return (
    <SearcherLogic
      show={show}
      handleShow={handleShow}
      categories={categories}
      filters={choosenFilter}
      chooseCategoryFilters={chooseCategoryFilters}
      setChoosenFilter={setChoosenFilter}
    />
  );
};

export default SearcherApollo;
