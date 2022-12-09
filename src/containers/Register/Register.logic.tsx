import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {RegisterData} from '../../@types/user';
import RegisterView from './Register.view';

const defaultValues = {
  username: '',
  email: '',
  password: '',
  passwordAgain: '',
};

interface Props {
  onSubmit: SubmitHandler<RegisterData>;
}

const RegisterLogic = ({onSubmit}: Props) => {
  const form = useForm({defaultValues});

  return <RegisterView form={form} onSubmit={onSubmit} />;
};

export default RegisterLogic;
