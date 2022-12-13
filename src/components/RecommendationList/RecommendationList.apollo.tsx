import React, {useEffect, useState} from 'react';
import {useMutation} from "@tanstack/react-query";
import {Alcohols} from '../../@types/alcohol';
import {getRecommendations} from "../../utils/requests/get";
import {RecommendationListLogic} from "./RecommendationList.logic";

export const RecommendationListApollo = () => {
  const [alcohols, setAlcohols] = useState<Alcohols>([]);

  const recommendationsMutation = useMutation({
    mutationFn: getRecommendations,
    onSuccess(data) {
      setAlcohols(data.data.alcohols);
    },
  });
  
  useEffect(() => {
    recommendationsMutation.mutate()
  }, []);
  
  return <RecommendationListLogic alcohols={alcohols} />;
};
