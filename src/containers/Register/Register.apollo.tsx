import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {RegisterData} from '../../@types/user';
import LoadingModal from '../../components/modal/LoadingModal';
import useToast from '../../utils/hooks/useToast';
import {register} from './Register.api';
import RegisterLogic from './Register.logic';

const RegisterApollo = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data, variables) => {
      toast.pushSuccess(
        'Rejestracja powiodło się',
        'Wykonaj kolejne kroki, aby aktywować konto.',
      );
      navigate('/confirm_register');
    },
    onError: (e: unknown) => {
      toast.pushError(
        'Rejestracja nie powiodło się',
        'Istnieje użytkownik o podanym mailu.',
      );
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
