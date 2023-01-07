import {useMutation, useQuery} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import LoadingModal from '../../components/modal/LoadingModal';
import {getCookie} from '../../utils/cookies';
import useToast from '../../utils/hooks/useToast';
import {getTags, getUserInfo} from '../../utils/requests/get';
import {addTag, postError} from '../../utils/requests/post';
import ProfileLogic from './Profile.logic';
import {resetPassword} from "../ResetPassword/ResetPassword.api";

const ProfileApollo = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data: user} = useQuery(['userInfo', id], getUserInfo);
  const {data: tags, refetch: refetchTags} = useQuery(['tags'], getTags);
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

  const createTag = async (tag_name: string) => {
    await addTag(tag_name);
    await refetchTags();
  };

  const passwordChangeMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data, variables) => {
      toast.pushSuccess(
        'Mail został wysłany',
        'Wykonaj kolejne kroki, w celu zmiany hasła.',
      );
    },
    onError: (e: unknown) => {
      toast.pushError(
        'Mail nie został wysłany',
        'Nastąpił nieoczekiwany błąd, spróbuj ponownie później lub skontaktuj się z nami mailowo: alkoholove.official@gmail.com.',
      );
    },
  });

  const sendPasswordChange = async (openPassword: (password: boolean) => void) => {
    await passwordChangeMutation.mutateAsync(user!.data.email);
    openPassword(false);
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
      sendPasswordChange={sendPasswordChange}
      createTag={createTag}
    />
  );
};

export default ProfileApollo;
