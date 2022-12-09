import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {IAlcohol} from '../../@types/alcohol';
import useToast from '../../utils/hooks/useToast';
import {postError} from '../../utils/requests/post';
import AlcoholPropertiesLogic from './AlcoholProperties.logic';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholPropertiesApollo = ({alcohol}: IProps) => {
  const toast = useToast();
  const errorMutation = useMutation({
    mutationFn: postError,
    onSuccess(data, variables) {
      toast.pushSuccess('Zaproponuj zmiany', 'Wysłałeś propozycję zmiany.');
    },
    onError() {
      toast.pushError('Zaproponuj zmiany', 'Problem z wysłaniem propozycji.');
    },
  });
  const sendError = (desc: string) => {
    const description = `${alcohol.name}(${alcohol.id}): ${desc}`;
    errorMutation.mutate({description});
  };
  return <AlcoholPropertiesLogic alcohol={alcohol} sendError={sendError} />;
};

export default AlcoholPropertiesApollo;
