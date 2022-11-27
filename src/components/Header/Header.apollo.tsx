import React, {useEffect} from 'react';
import {useMutation} from '@tanstack/react-query';
import {getUserInformation, refreshTokens} from './Header.api';
import HeaderLogic from './Header.logic';
import {getCookie, setCookie} from '../../utils/cookies';
import {Tokens} from '../../@types/user.d';

const HeaderApollo = () => {
  const authorization = getCookie<Tokens>('auth');
  const refreshMutation = useMutation({
    mutationFn: refreshTokens,
    onSuccess: (data, variables) => {
      setCookie('auth', data.data);
      const accessToken = data.data.access_token;
      // eslint-disable-next-line no-use-before-define
      userMutation.mutate(accessToken);
    },
    onError: e => {
      setCookie('auth', '');
      console.log({e});
    },
  });
  const userMutation = useMutation({
    mutationFn: getUserInformation,
    onSuccess: (data, variables) => {
      console.log({data});
    },
    onError: () => {
      refreshMutation.mutate(authorization.refresh_token);
    },
  });
  useEffect(() => {
    if (!authorization) return;
    userMutation.mutate(authorization.access_token);
  }, []);
  return <HeaderLogic isLogged={userMutation.isSuccess} />;
};

export default HeaderApollo;
