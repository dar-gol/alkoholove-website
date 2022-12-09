import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import ResetPasswordView from './ResetPassword.view';

const defaultValues = {
  email: '',
};

interface Props {
  onSubmit: SubmitHandler<{email: string}>;
}

const ResetPasswordLogic = ({onSubmit}: Props) => {
  const form = useForm({defaultValues});

  return <ResetPasswordView form={form} onSubmit={onSubmit} />;
};

export default ResetPasswordLogic;
