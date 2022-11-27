import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {RegisterData} from '../../@types/user';
import LoadingModal from '../../components/modal/LoadingModal';
import Toast from '../../components/Toast/Toast';
import {setCookie} from '../../utils/cookies';
import {register} from './Register.api';
import RegisterLogic from './Register.logic';

const RegisterApollo = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data, variables) => {
      toast.custom(t => (
        <Toast
          type="success"
          title="Rejestracja powiodło się"
          text="Wykonaj kolejne kroki, aby aktywować konto."
          t={t}
        />
      ));
      navigate('/confirm_register');
    },
    onError: (e: unknown) => {
      toast.custom(t => (
        <Toast
          type="error"
          title="Rejestracja nie powiodło się"
          text="Istnieje użytkownik o podanym mailu."
          t={t}
        />
      ));
    },
  });

  if (mutation.isLoading)
    return (
      <LoadingModal title="Proszę czekać, przygotowujemy dane..." isOpen />
    );

  const handleSubmit = async (data: RegisterData) => {
    mutation.mutate(data);
  };

  return <RegisterLogic onSubmit={handleSubmit} />;
};

export default RegisterApollo;
