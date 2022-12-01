import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ResetPasswordData} from '../../@types/user';
import LoadingModal from '../../components/modal/LoadingModal';
import useToast from '../../utils/hooks/useToast';
import {resetPassword} from './ChangePassword.api';
import ChangePasswordLogic from './ChangePassword.logic';

const ChangePasswordApollo = () => {
  const toast = useToast();
  const {token} = useParams();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data, variables) => {
      toast.pushSuccess('Resetowanie hasła', 'Hasło zostało zresetowanie.');
      navigate('/login');
    },
    onError: (e: unknown) => {
      toast.pushSuccess('Resetowanie hasła', 'Coś poszło nie tak.');
    },
  });

  const handleSubmit = async (data: ResetPasswordData) => {
    // eslint-disable-next-line no-param-reassign
    data.token = token || '';
    mutation.mutate(data);
  };

  if (mutation.isLoading)
    return (
      <LoadingModal title="Proszę czekać, przygotowujemy dane..." isOpen />
    );

  return <ChangePasswordLogic onSubmit={handleSubmit} />;
};

export default ChangePasswordApollo;
