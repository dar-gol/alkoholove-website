import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholPropertiesLogic from './AlcoholProperties.logic';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholPropertiesApollo = ({alcohol}: IProps) => {
  const t = 0;
  return <AlcoholPropertiesLogic alcohol={alcohol} />;
};

export default AlcoholPropertiesApollo;
