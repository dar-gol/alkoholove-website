import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholOverviewView from './AlcoholOverview.view';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholOverviewLogic = ({alcohol}: IProps) => {
  const t = 0;
  return <AlcoholOverviewView alcohol={alcohol} />;
};

export default AlcoholOverviewLogic;
