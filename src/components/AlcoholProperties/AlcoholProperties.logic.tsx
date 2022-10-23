import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholPropertiesView from './AlcoholProperties.view';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholPropertiesLogic = ({alcohol}: IProps) => {
  const t = 0;
  return <AlcoholPropertiesView alcohol={alcohol} />;
};

export default AlcoholPropertiesLogic;
