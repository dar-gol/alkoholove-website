import {useMutation, useQuery} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import LoadingModal from '../../components/modal/LoadingModal';
import {getCookie} from '../../utils/cookies';
import useToast from '../../utils/hooks/useToast';
import {getTags, getUserInfo} from '../../utils/requests/get';
import {postError} from '../../utils/requests/post';
import ProfileLogic from './Profile.logic';

const ProfileApollo = () => {
  const {id} = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!getCookie('auth')) navigate('/login');
  }, []);

  if (!user || !tags) return <LoadingModal title="" isOpen />;

  return (
    <ProfileLogic user={user.data} tags={tags.data} sendError={sendError} />
  );
};

export default ProfileApollo;
