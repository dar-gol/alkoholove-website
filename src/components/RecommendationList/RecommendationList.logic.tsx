import React from 'react';
import {Alcohols} from '../../@types/alcohol';
import {RecommendationListView} from "./RecommendationList.view";

interface RecommendationListProps {
  alcohols: Alcohols;
}

export const RecommendationListLogic: React.FC<RecommendationListProps> = ({alcohols}) => (
  <RecommendationListView alcohols={alcohols} />
);
