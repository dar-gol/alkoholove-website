import React from 'react';
import {Alcohols} from '../../@types/alcohol';
import {IFilter} from '../../@types/filters';
import AlcoholsView from './Alcohols.view';

interface Props {
  alcohols: Alcohols;
  filters: {
    filters: IFilter[];
    kind: string;
    phrase: string;
  };
}

const AlcoholsLogic = ({alcohols, filters}: Props) => {
  const t = 0;
  return <AlcoholsView alcohols={alcohols} filters={filters} />;
};

export default AlcoholsLogic;
