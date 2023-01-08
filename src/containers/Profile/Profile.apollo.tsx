import {useMutation, useQuery} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import LoadingModal from '../../components/modal/LoadingModal';
import {getCookie} from '../../utils/cookies';
import useToast from '../../utils/hooks/useToast';
import {getTags, getUserInfo} from '../../utils/requests/get';
import {addTag, postError, postAccountDelete} from '../../utils/requests/post';
import ProfileLogic from './Profile.logic';

const ProfileApollo = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data: user} = useQuery(['userInfo', id], getUserInfo);
  const {data: tags, refetch: refetchTags} = useQuery(['tags'], getTags);
  const toast = useToast();

  const deleteAccountMutation = useMutation({
    mutationFn: postAccountDelete,
    onSuccess(data, variables) {
      toast.pushSuccess('Usuń konto', 'Wyślemy Ci mailowe instrukcje jak usunąć konto. Wystarczy nacisnąć poniższy przycisk.');
      navigate('/logout')
    },
    onError() {
      toast.pushError('Usuń konto', 'Problem z usunięciem konta.');
    },
  });

  const deleteAccount = () => {
    deleteAccountMutation.mutate();
  };

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

  const createTag = async (tag_name: string) => {
    await addTag(tag_name);
    await refetchTags();
  };

  useEffect(() => {
    if (!getCookie('auth')) navigate('/login');
  }, []);

  if (!user || !tags) return <LoadingModal title="" isOpen />;

  return (
    <ProfileLogic
      user={user.data}
      tags={tags.data}
      sendError={sendError}
      deleteAccount={deleteAccount}
      createTag={createTag}
    />
  );
};

export default ProfileApollo;
