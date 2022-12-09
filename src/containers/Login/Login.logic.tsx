import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData } from "../../@types/user";
import LoginView from "./Login.view";

const defaultValues = {
  username: "",
  password: "",
};

interface Props {
  onSubmit: SubmitHandler<LoginData>;
}

const LoginLogic = ({ onSubmit }: Props) => {
  const form = useForm({ defaultValues });

  return (
    <LoginView
      form={form}
      onSubmit={onSubmit}
    />
  );
};

export default LoginLogic;
