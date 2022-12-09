import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ResetPasswordData} from '../../@types/user';
import ChangePasswordView from './ChangePassword.view';

const defaultValues = {
  token: '',
  new_password: '',
  passwordAgain: '',
};

interface Props {
  onSubmit: SubmitHandler<ResetPasswordData>;
}

const ChangePasswordLogic = ({onSubmit}: Props) => {
  const form = useForm({defaultValues});

  return <ChangePasswordView form={form} onSubmit={onSubmit} />;
};

export default ChangePasswordLogic;
