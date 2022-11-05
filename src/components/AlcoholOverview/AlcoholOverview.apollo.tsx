import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholOverviewLogic from './AlcoholOverview.logic';
import AlcoholOverviewView from './AlcoholOverview.view';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholOverviewApollo = ({alcohol}: IProps) => {
  const t = 0;
  return <AlcoholOverviewLogic alcohol={alcohol} />;
};

export default AlcoholOverviewApollo;
