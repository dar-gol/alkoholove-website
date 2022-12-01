import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import {getSimilar} from './AlcoholSimilar.api';
import AlcoholSimilarLogic from './AlcoholSimilar.logic';

interface Props {
  alcohol: IAlcohol;
}

const AlcoholSimilarApollo = ({alcohol}: Props) => {
  if (!alcohol) return null;
  const {data} = useQuery(['Similar', alcohol.id], getSimilar);
  if (!data?.data.alcohols) return null;
  return (
    <AlcoholSimilarLogic alcohols={data?.data.alcohols} alcohol={alcohol} />
  );
};

export default AlcoholSimilarApollo;
