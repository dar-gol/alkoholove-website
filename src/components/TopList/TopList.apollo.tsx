import React, {useEffect, useState} from 'react';
import {Alcohols, AlcoholsObject} from '../../@types/alcohol';
import {API, URL} from '../../utils/constant';
import {post} from '../../utils/fetch';
import TopListLogic from './TopList.logic';

const TopListApollo = () => {
  const [alcohols, setAlcohols] = useState<Alcohols>([]);
  const [limit, setLimit] = useState<number>(10);
  useEffect(() => {
    post({
      url: `${API}${URL.GET_ALCOHOL}?offset=10&limit=${limit}`,
    })
      .then(value => value.json())
      .then((value: AlcoholsObject) =>
        setAlcohols(value.alcohols ? value.alcohols : []),
      );
  }, [limit]);

  const increaseLimit = () => setLimit(prev => prev + 10);

  return <TopListLogic alcohols={alcohols} increaseLimit={increaseLimit} />;
};

export default TopListApollo;
