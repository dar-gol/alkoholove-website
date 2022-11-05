import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {AlcoholsObject, IAlcohol} from '../../@types/alcohol';
import {API, URL} from '../../utils/constant';
import {get} from '../../utils/fetch';
import AlcoholDetailsLogic from './AlcoholDetails.logic';

const AlcoholDetailsApollo = () => {
  const {alcoholBarcode} = useParams();
  const [alcohol, setAlcohol] = useState<IAlcohol | null>(null);

  useEffect(() => {
    if (!alcoholBarcode) return;

    get({
      url: `${API}${URL.GET_ALCOHOL}/${alcoholBarcode}`,
    })
      .then(data => data.json())
      .then((data: IAlcohol) => setAlcohol(data));
  }, []);

  if (!alcohol) return null;

  return <AlcoholDetailsLogic alcohol={alcohol} />;
};

export default AlcoholDetailsApollo;
