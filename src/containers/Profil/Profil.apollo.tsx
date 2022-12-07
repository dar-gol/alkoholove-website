import {useMutation, useQuery} from '@tanstack/react-query';
import React from 'react';
import {useParams} from 'react-router-dom';
import LoadingModal from '../../components/modal/LoadingModal';
import useToast from '../../utils/hooks/useToast';
import {getTags, getUserInfo} from '../../utils/requests/get';
import {postError} from '../../utils/requests/post';
import ProfilLogic from './Profil.logic';

const ProfilApollo = () => {
  const {id} = useParams();
  const {data: user} = useQuery(['userInfo', id], getUserInfo);
  const {data: tags} = useQuery(['tags'], getTags);
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

  const sendError = (description: string) => {
    errorMutation.mutate({description});
  };

  if (!user || !tags) return <LoadingModal title="" isOpen />;

  return (
    <ProfilLogic user={user.data} tags={tags.data} sendError={sendError} />
  );
};

export default ProfilApollo;
