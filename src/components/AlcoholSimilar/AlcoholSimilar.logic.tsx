import React from 'react';
import {Alcohols, IAlcohol} from '../../@types/alcohol';
import AlcoholSimilarView from './AlcoholSimilar.view';

interface Props {
  alcohols: Alcohols;
  alcohol: IAlcohol;
}

const AlcoholSimilarLogic = ({alcohols, alcohol}: Props) => {
  const t = 0;
  return <AlcoholSimilarView alcohols={alcohols} alcohol={alcohol} />;
};

export default AlcoholSimilarLogic;
