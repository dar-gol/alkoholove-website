import React from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {Alcohols} from '../../@types/alcohol';
import {IFilter} from '../../@types/filters';
import {IPageInfo} from '../../@types/pagination';
import useQueryParams from '../../utils/hooks/useQueryParams';
import AlcoholsView from './Alcohols.view';

interface Props {
  alcohols: Alcohols;
  page: IPageInfo | undefined;
  filters: {
    filters: IFilter[];
    kind: string;
    phrase: string;
  };
}

const AlcoholsLogic = ({alcohols, filters, page}: Props) => {
  const {query} = useQueryParams();
  const navigate = useNavigate();

  const removeFilter = (prop: string, filterValue: string) => {
    const {phrase, kind} = query;
    const queryFilters = JSON.parse(
      decodeURIComponent(query.filters),
    ) as IFilter[];
    const changedFilters = queryFilters.reduce<IFilter[]>((prev, curr) => {
      if (curr.name === prop) {
        const copy = JSON.parse(JSON.stringify(curr)) as IFilter;
        copy.values = curr.values.filter(value => value.value !== filterValue);
        return [...prev, copy];
      }
      return [...prev, curr];
    }, []);
    const params = createSearchParams({
      phrase: phrase || '',
      kind: kind || '',
      filters: encodeURIComponent(JSON.stringify(changedFilters)),
    });
    navigate(`/alcohols?${params}`);
  };
  const removePhrase = (key: string) => {
    const {phrase, kind} = query;
    query[key] = '';
    const params = createSearchParams({
      phrase: phrase || '',
      kind: kind || '',
      filters: query.filters || encodeURIComponent('[]'),
      [key]: query[key],
    });
    navigate(`/alcohols?${params}`);
  };

  const remove = (key: string, filterValue?: string) => {
    if (filterValue) {
      removeFilter(key, filterValue);
      return;
    }
    removePhrase(key);
  };

  const setLimit = () => {
    const {phrase, kind} = query;
    const limit = query.limit ? Number(query.limit) + 10 : 20;
    const params = createSearchParams({
      phrase: phrase || '',
      kind,
      filters: query.filters || '',
      limit: limit.toString(),
    });
    navigate(`/alcohols?${params}`);
  };

  return (
    <AlcoholsView
      alcohols={alcohols}
      filters={filters}
      removeFilter={remove}
      setLimit={setLimit}
      page={page}
    />
  );
};

export default AlcoholsLogic;
