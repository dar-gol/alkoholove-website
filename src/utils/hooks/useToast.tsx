import {toast} from 'react-hot-toast';
import React from 'react';
import Toast from '../../components/Toast/Toast';
import {ToastType} from '../../@types/global';

const useToast = () => {
  const pushToast = (
    type: ToastType,
    title: string,
    text: string,
    icon: string,
  ) => {
    toast.custom(t => (
      <Toast type={type} title={title} text={text} t={t} icon={icon} />
    ));
  };

  const pushSuccess = (title: string, text: string) =>
    pushToast('success', title, text, 'icon-Success');

  const pushWarning = (title: string, text: string) =>
    pushToast('warning', title, text, 'icon-Error');

  const pushError = (title: string, text: string) =>
    pushToast('error', title, text, 'icon-Error');

  const pushInfo = (title: string, text: string) =>
    pushToast('info', title, text, 'icon-Info');

  return {
    pushSuccess,
    pushWarning,
    pushError,
    pushInfo,
  };
};

export default useToast;
