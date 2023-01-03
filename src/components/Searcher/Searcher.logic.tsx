import React, {useEffect, useState} from 'react';
import {ICategory} from '../../@types/category';
import {
  ICategoryFilter,
  IFetchCategoryFilter,
  IFilter,
} from '../../@types/filters';
import useQueryParams from '../../utils/hooks/useQueryParams';
import SearcherView from './Searcher.view';

interface Props {
  show: boolean;
  handleShow: (state?: boolean) => void;
  categories: ICategory[];
  filters: ICategoryFilter | null;
  phrase: string;
  chooseCategoryFilters: (
    category: string,
    preFilters?: IFetchCategoryFilter[],
    isInit?: boolean,
    isLastSearch?: boolean,
  ) => void;
  setChoosenFilter: React.Dispatch<
    React.SetStateAction<ICategoryFilter | null>
  >;
  setPhrase: React.Dispatch<React.SetStateAction<string>>;
  total: number;
  search: () => void;
}

const SearcherLogic = ({
  show,
  handleShow,
  categories,
  filters,
  chooseCategoryFilters,
  setChoosenFilter,
  total,
  search,
  setPhrase,
  phrase,
}: Props) => {
  const [phraseValue, setPhraseValue] = useState<string>('');
  const {query} = useQueryParams();

  if (show) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  const setSelectedFilterValue = (filterName: string, filterValue: string) => {
    if (!filters) return;
    const t = filters.filters.reduce<IFilter[]>((prev, curr) => {
      if (curr.name !== filterName) return [...prev, curr];
      const values = curr.values.map(value => {
        if (value.value !== filterValue) return value;
        return {...value, selected: !value.selected};
      });
      return [...prev, {...curr, values}];
    }, []);
    setChoosenFilter({...filters, filters: t});
  };
  useEffect(() => {
    if (phrase !== phraseValue) setPhraseValue(phrase);
  }, [phrase]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setPhrase(phraseValue);
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [phraseValue]);
  useEffect(() => {
    setPhrase(query.phrase || '');
    setPhraseValue(query.phrase || '');
  }, [JSON.stringify(query)]);
  return (
    <SearcherView
      show={show}
      handleShow={handleShow}
      categories={categories}
      filters={filters}
      chooseCategoryFilters={chooseCategoryFilters}
      setSelectedFilterValue={setSelectedFilterValue}
      total={total}
      search={search}
      phrase={phraseValue}
      setPhrase={setPhraseValue}
    />
  );
};

export default SearcherLogic;
