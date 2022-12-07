import React, {useEffect} from 'react';
import {Tokens} from '../../@types/user';
import {getCookie, setCookie} from '../../utils/cookies';
import {logout} from '../../utils/requests/post';
import InformationApollo from '../Information/Information.apollo';

const LogoutView = () => {
  useEffect(() => {
    const tokens = getCookie<Tokens>('auth');
    setCookie('auth', '');
    if (tokens)
      logout(tokens).then(() => {
        document.location.reload();
      });
  }, []);

  return (
    <InformationApollo
      title="Wylogowanie"
      greenContent="Zostałeś wylogowany z systemu."
      buttonText="Przejdź do strony głównej"
      href="/"
    />
  );
};

export default LogoutView;
