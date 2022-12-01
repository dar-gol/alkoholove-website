import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholDetailsView from './AlcoholDetails.view';

interface IProps {
  alcohol: IAlcohol;
  refresh: () => void;
}

const AlcoholDetailsLogic = ({alcohol, refresh}: IProps) => {
  const t = 0;
  return <AlcoholDetailsView alcohol={alcohol} refresh={refresh} />;
};

export default AlcoholDetailsLogic;
