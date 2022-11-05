import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholDetailsView from './AlcoholDetails.view';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholDetailsLogic = ({alcohol}: IProps) => {
  const t = 0;
  return <AlcoholDetailsView alcohol={alcohol} />;
};

export default AlcoholDetailsLogic;
