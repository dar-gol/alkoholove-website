import React, {useEffect, useState} from 'react';
import {AlcoholsObject, Alcohols} from '../../@types/alcohol';
import {IFilter} from '../../@types/filters';
import {API, URL} from '../../utils/constant';
import {post} from '../../utils/fetch';
import useQueryParams from '../../utils/hooks/useQueryParams';
import AlcoholsLogic from './Alcohols.logic';

const AlcoholsApollo = () => {
  const [alcohols, setAlcohols] = useState<Alcohols>([]);
  const [filters, setFilters] = useState<{
    filters: IFilter[];
    kind: string;
    phrase: string;
  }>();
  const {query} = useQueryParams();
  const getAlcohols = (phrase: string, body: object) => {
    const search = phrase ? `&phrase=${phrase}` : '';
    post({
      header: {
        'Content-Type': 'application/json',
      },
      url: `${API}${URL.GET_ALCOHOL}?offset=0&limit=10${search}`,
      body: JSON.stringify(body),
    })
      .then(value => value.json())
      .then((value: AlcoholsObject) => setAlcohols(value.alcohols || []));
  };
  const prepareKind = (kind: string): {kind?: string} => {
    if (!kind) return {};
    const prepKind = JSON.parse(decodeURIComponent(kind)) as {
      value: string;
    };
    return {kind: prepKind.value};
  };

  useEffect(() => {
    const {phrase, kind} = query;
    if (!query.filters) getAlcohols(phrase, {});
    else {
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
      const prepKind = prepareKind(kind);
      setFilters({filters: rawBody, phrase, kind: prepKind?.kind || 'all'});
      getAlcohols(phrase, {...body, ...prepKind});
    }
  }, []);
  if (!filters) return null;
  return <AlcoholsLogic alcohols={alcohols} filters={filters} />;
};

export default AlcoholsApollo;
