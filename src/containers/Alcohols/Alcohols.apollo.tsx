import React, {useEffect, useState} from 'react';
import {AlcoholsObject, Alcohols} from '../../@types/alcohol';
import {IFilter} from '../../@types/filters';
import {IPageInfo} from '../../@types/pagination';
import {API, URL} from '../../utils/constant';
import {post} from '../../utils/fetch';
import useQueryParams from '../../utils/hooks/useQueryParams';
import AlcoholsLogic from './Alcohols.logic';

const defaultFilters = () => ({
  filters: [],
  kind: 'all',
  phrase: '',
});

const AlcoholsApollo = () => {
  const [alcohols, setAlcohols] = useState<Alcohols>([]);
  const [page, setPage] = useState<IPageInfo>();
  const [filters, setFilters] = useState<{
    filters: IFilter[];
    kind: string;
    phrase: string;
  }>();
  const {query} = useQueryParams();
  const getAlcohols = (
    phrase: string,
    body: {[k: string]: string[] | string},
    limit = '10',
  ) => {
    const search = phrase ? `&phrase=${phrase}` : '';
    if (!body.kind || body?.kind === 'all') {
      // eslint-disable-next-line no-param-reassign
      delete body.kind;
    }
    const preparedBody = Object.keys(body).reduce((prev, curr) => {
      if (!body[curr] || body[curr] === 'all') return prev;
      if (body[curr] instanceof Array && body[curr].length === 0) return prev;
      return {...prev, [curr]: body[curr]};
    }, {});
    post({
      header: {
        'Content-Type': 'application/json',
      },
      url: `${API}${URL.GET_ALCOHOL}?offset=0&limit=${limit}${search}`,
      body: JSON.stringify(preparedBody),
    })
      .then(value => value.json())
      .then((value: AlcoholsObject) => {
        setAlcohols(value.alcohols || []);
        setPage(value.page_info);
      });
  };

  useEffect(() => {
    const {phrase, kind} = query;
    if (!query.filters) {
      getAlcohols(phrase, {kind});
      setFilters({filters: [], phrase, kind});
    } else {
      const rawBody = JSON.parse(
        decodeURIComponent(query.filters),
      ) as IFilter[];
      const body = rawBody.reduce<{[k: string]: string[]}>((prev, curr) => {
        const values = curr.values.map(value => value.value);
        return {
          ...prev,
          [curr.name]: values,
        };
      }, {});
      setFilters({filters: rawBody, phrase, kind});
      getAlcohols(phrase, {...body, kind}, query.limit);
    }
  }, [JSON.stringify(query)]);
  return (
    <AlcoholsLogic
      alcohols={alcohols}
      filters={filters || defaultFilters()}
      page={page}
    />
  );
};

export default AlcoholsApollo;
