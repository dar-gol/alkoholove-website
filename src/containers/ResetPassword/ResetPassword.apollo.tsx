import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import Toast from '../../components/Toast/Toast';
import {resetPassword} from './ResetPassword.api';
import ResetPasswordLogic from './ResetPassword.logic';

const ResetPasswordApollo = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data, variables) => {
      toast.custom(t => (
        <Toast
          type="success"
          title="Mail został wysłany"
          text="Wykonaj kolejne kroki, w celu resetu hasła."
          t={t}
        />
      ));
      navigate('/confirm_reset_password');
    },
    onError: (e: unknown) => {
      toast.custom(t => (
        <Toast
          type="error"
          title="Mail nie został wysłany"
          text="Nie istnieje podany mail w AlkohoLove."
          t={t}
        />
      ));
    },
  });

  const handleSubmit = async (data: {email: string}) => {
    mutation.mutate(data.email);
  };

  return <ResetPasswordLogic onSubmit={handleSubmit} />;
};

export default ResetPasswordApollo;
