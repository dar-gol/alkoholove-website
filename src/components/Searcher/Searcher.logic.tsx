import React from 'react';
import {ICategory} from '../../@types/category';
import {ICategoryFilter, IFilter} from '../../@types/filters';
import SearcherView from './Searcher.view';

interface Props {
  show: boolean;
  handleShow: () => void;
  categories: ICategory[];
  filters: ICategoryFilter | null;
  chooseCategoryFilters: (category: string) => void;
  setChoosenFilter: React.Dispatch<
    React.SetStateAction<ICategoryFilter | null>
  >;
}

const SearcherLogic = ({
  show,
  handleShow,
  categories,
  filters,
  chooseCategoryFilters,
  setChoosenFilter,
}: Props) => {
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
  return (
    <SearcherView
      show={show}
      handleShow={handleShow}
      categories={categories}
      filters={filters}
      chooseCategoryFilters={chooseCategoryFilters}
      setSelectedFilterValue={setSelectedFilterValue}
    />
  );
};

export default SearcherLogic;
