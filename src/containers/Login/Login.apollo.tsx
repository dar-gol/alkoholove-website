import {useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import React from 'react';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {LoginData, Tokens} from '../../@types/user';
import LoadingModal from '../../components/modal/LoadingModal';
import Toast from '../../components/Toast/Toast';
import {setCookie} from '../../utils/cookies';
import {login} from './Login.api';
import LoginLogic from './Login.logic';

const LoginApollo = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data, variables) => {
      setCookie('auth', data.data);
      toast.custom(t => (
        <Toast
          type="success"
          title="Logowanie powiodło się"
          text="Zostałeś przekierowany na stronę główną."
          t={t}
        />
      ));
      navigate('/home');
    },
    onError: () => {
      toast.custom(t => (
        <Toast
          type="error"
          title="Logowanie nie powiodło się"
          text="Niepoprawne dane logowania."
          t={t}
        />
      ));
    },
  });

  const handleSubmit = async (data: LoginData) => {
    mutation.mutate(data);
  };

  if (mutation.isLoading)
    return (
      <LoadingModal title="Proszę czekać, przygotowujemy dane..." isOpen />
    );

  return <LoginLogic onSubmit={handleSubmit} />;
};

export default LoginApollo;
