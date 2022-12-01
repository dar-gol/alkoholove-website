import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {AlcoholsObject, IAlcohol} from '../../@types/alcohol';
import LoadingModal from '../../components/modal/LoadingModal';
import {API, URL} from '../../utils/constant';
import {get} from '../../utils/fetch';
import AlcoholDetailsLogic from './AlcoholDetails.logic';

const AlcoholDetailsApollo = () => {
  const {alcoholBarcode} = useParams();
  const [alcohol, setAlcohol] = useState<IAlcohol | null>(null);

  const init = () => {
    get({
      url: `${API}${URL.GET_ALCOHOL}/${alcoholBarcode}`,
    })
      .then(data => data.json())
      .then((data: IAlcohol) => setAlcohol(data));
  };

  useEffect(() => {
    if (!alcoholBarcode) return;
    setAlcohol(null);
    init();
  }, [alcoholBarcode]);

  if (!alcohol) return <LoadingModal isOpen title="" />;

  return <AlcoholDetailsLogic alcohol={alcohol} refresh={init} />;
};

export default AlcoholDetailsApollo;
