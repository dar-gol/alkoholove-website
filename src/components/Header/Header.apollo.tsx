import React, {useEffect} from 'react';
import {useMutation} from '@tanstack/react-query';
import {getUserInformation, refreshTokens} from './Header.api';
import HeaderLogic from './Header.logic';
import {getCookie, setCookie} from '../../utils/cookies';
import {Tokens} from '../../@types/user';

const HeaderApollo = () => {
  const refreshMutation = useMutation({
    mutationFn: refreshTokens,
    onSuccess: (data, variables) => {
      setCookie('auth', data.data);
      document.location.reload();
    },
    onError: e => {
      const tokens = getCookie<Tokens>('auth');
      if (tokens) document.location.reload();
      setCookie('auth', '');
    },
  });
  const userMutation = useMutation({
    mutationFn: getUserInformation,
    onError: () => {
      const tokens = getCookie<Tokens>('auth');
      refreshMutation.mutate(tokens.refresh_token);
    },
  });
  useEffect(() => {
    const tokens = getCookie<Tokens>('auth');
    if (!tokens) return;
    userMutation.mutate();
  }, []);
  return <HeaderLogic isLogged={userMutation.isSuccess} />;
};

export default HeaderApollo;
