import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {toast} from 'react-hot-toast';
import {useNavigate, useParams} from 'react-router-dom';
import {ResetPasswordData} from '../../@types/user';
import LoadingModal from '../../components/modal/LoadingModal';
import Toast from '../../components/Toast/Toast';
import {resetPassword} from './ChangePassword.api';
import ChangePasswordLogic from './ChangePassword.logic';

const ChangePasswordApollo = () => {
  const {token} = useParams();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data, variables) => {
      toast.custom(t => (
        <Toast
          type="success"
          title="Resetowanie hasła"
          text="Hasło zostało zresetowanie."
          t={t}
        />
      ));
      navigate('/login');
    },
    onError: (e: unknown) => {
      toast.custom(t => (
        <Toast
          type="error"
          title="Resetowanie hasła"
          text="Coś poszło nie tak."
          t={t}
        />
      ));
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
