import React, {useEffect, useState} from 'react';
import {Alcohols, AlcoholsObject} from '../../@types/alcohol';
import {API, URL} from '../../utils/constant';
import {post} from '../../utils/fetch';
import TopListLogic from './TopList.logic';

const TopListApollo = () => {
  const [alcohols, setAlcohols] = useState<Alcohols>([]);
  useEffect(() => {
    post({
      url: `${API}${URL.GET_ALCOHOL}?offset=10&limit=25`,
    })
      .then(value => value.json())
      .then((value: AlcoholsObject) =>
        setAlcohols(value.alcohols ? value.alcohols : []),
      );
  }, []);

  return <TopListLogic alcohols={alcohols} />;
};

export default TopListApollo;
