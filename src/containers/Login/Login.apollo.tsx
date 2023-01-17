import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {LoginData} from '../../@types/user';
import LoadingModal from '../../components/modal/LoadingModal';
import {setCookie} from '../../utils/cookies';
import useToast from '../../utils/hooks/useToast';
import {login} from './Login.api';
import LoginLogic from './Login.logic';

const LoginApollo = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data, variables) => {
      setCookie('auth', data.data, 31);
      toast.pushSuccess(
        'Logowanie powiodło się',
        'Zostałeś przekierowany na stronę główną.',
      );
      navigate('/home');
    },
    onError: () => {
      toast.pushError(
        'Logowanie nie powiodło się',
        'Niepoprawne dane logowania.',
      );
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
