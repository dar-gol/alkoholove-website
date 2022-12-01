import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import useToast from '../../utils/hooks/useToast';
import {resetPassword} from './ResetPassword.api';
import ResetPasswordLogic from './ResetPassword.logic';

const ResetPasswordApollo = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data, variables) => {
      toast.pushSuccess(
        'Mail został wysłany',
        'Wykonaj kolejne kroki, w celu resetu hasła.',
      );
      navigate('/confirm_reset_password');
    },
    onError: (e: unknown) => {
      toast.pushError(
        'Mail nie został wysłany',
        'Nie istnieje podany mail w AlkohoLove.',
      );
    },
  });

  const handleSubmit = async (data: {email: string}) => {
    mutation.mutate(data.email);
  };

  return <ResetPasswordLogic onSubmit={handleSubmit} />;
};

export default ResetPasswordApollo;
