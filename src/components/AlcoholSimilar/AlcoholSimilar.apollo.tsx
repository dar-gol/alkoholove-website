import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import {getSimilar} from './AlcoholSimilar.api';
import AlcoholSimilarLogic from './AlcoholSimilar.logic';
import {Row} from '../../styles/global.styled';
import Loader from '../Loader/loader';

interface Props {
  alcohol: IAlcohol;
}

const AlcoholSimilarApollo = ({alcohol}: Props) => {
  if (!alcohol) return null;
  const {data} = useQuery(['Similar', alcohol.id], getSimilar);
  if (!data?.data.alcohols)
    return (
      <Row
        justifyContent="center"
        alignItems="center"
        height="400px"
        margin="20px 0">
        <Loader />
      </Row>
    );
  return (
    <AlcoholSimilarLogic alcohols={data?.data.alcohols} alcohol={alcohol} />
  );
};

export default AlcoholSimilarApollo;
