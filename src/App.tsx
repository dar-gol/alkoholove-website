import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components';
import {Toaster} from 'react-hot-toast';
import {useCookies} from 'react-cookie';
import AlcoholsApollo from './containers/Alcohols/Alcohols.apollo';
import AlcoholDetailsApollo from './containers/AlcoholDetails/AlcoholDetails.apollo';
import HomeApollo from './containers/Home/Home.apollo';

import {Main} from './styles/global.styled';

// get function to create theme
import createTheme from './styles/theme';
import LoginApollo from './containers/Login/Login.apollo';
import RegisterApollo from './containers/Register/Register.apollo';
import ResetPasswordApollo from './containers/ResetPassword/ResetPassword.apollo';
import ChangePasswordApollo from './containers/ChangePassword/ChangePassword.apollo';
import InformationApollo from './containers/Information/Information.apollo';
import LogoutView from './containers/Logout/Logout.view';
import ProfileApollo from './containers/Profile/Profile.apollo';
import UserListsApollo from './containers/UserLists/UserLists.apollo';
import {LOCATION} from './utils/constant';
import SocialsApollo from './containers/Socials/Socials.apollo';
import CheckMajority from './components/CheckMajority.view';
import {getCookie, setCookie} from './utils/cookies';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const [cookie] = useCookies();
  const theme = createTheme(cookie?.mode, cookie?.isHighContrast === 'true');
  const [isMajority, setIsMajority] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const getMajority = () => {
    const majorityCookie = getCookie('isMajority');
    if (majorityCookie === 'true') return true;
    if (majorityCookie === 'false') return false;
    return majorityCookie;
  };

  const onChooseMajority = (isMajor: boolean, isRemember: boolean) => {
    if (isRemember) setCookie('isMajority', isMajor.toString());
    setIsMajority(isMajor);
  };

  useEffect(() => {
    const majorityCookie = getMajority();
    const isMajor = majorityCookie !== undefined ? majorityCookie : isMajority;
    setIsOpen(!isMajor);
  }, [isMajority]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Toaster position="top-center" gutter={20} />
        <CheckMajority
          isOpen={isOpen}
          onChooseMajority={onChooseMajority}
          isMajority={isMajority}
        />
        <Main>
          <Routes>
            <Route path={LOCATION.ALCOHOLS} element={<AlcoholsApollo />} />
            <Route path={LOCATION.PROFILE} element={<ProfileApollo />} />
            <Route
              path={`${LOCATION.PROFILE}/:id`}
              element={<ProfileApollo />}
            />
            <Route
              path={`${LOCATION.USER}/:userId/lists/:listId/:listName`}
              element={<UserListsApollo />}
            />
            <Route path="/" element={<HomeApollo />} />
            <Route
              path={`${LOCATION.ALCOHOL}/:alcoholBarcode`}
              element={<AlcoholDetailsApollo />}
            />
            <Route path={LOCATION.LOGIN} element={<LoginApollo />} />
            <Route path={LOCATION.LOGOUT} element={<LogoutView />} />
            <Route path={LOCATION.REGISTER} element={<RegisterApollo />} />
            <Route
              path={LOCATION.RESET_PASSWORD}
              element={<ResetPasswordApollo />}
            />
            <Route
              path={`${LOCATION.RESET_PASSWORD}/:token`}
              element={<ChangePasswordApollo />}
            />
            <Route
              path={LOCATION.CONFIRM_PASSWORD}
              element={
                <InformationApollo
                  title="Potwierdzenie konta"
                  greenContent="Na podany email został wysłany mail weryfikacyjny. Pamiętaj sprawdzić spam."
                  yellowContent="Nie jest możliwe logowanie do AlkohoLove przed potwierdzeniem
                  konta."
                  buttonText="Przejdź do logowania"
                  href="/login"
                />
              }
            />
            <Route
              path={LOCATION.CONFIRM_RESET_PASSWORD}
              element={
                <InformationApollo
                  title="Zmiana hasła"
                  greenContent="Na podany email został wysłany mail. Pamiętaj sprawdzić
              spam."
                  buttonText="Przejdź do logowania"
                  href="/login"
                />
              }
            />
            <Route
              path={LOCATION.VALID_EMAIL_VERIFICATION}
              element={
                <InformationApollo
                  title="Weryfikacja emaila"
                  greenContent={`
                    Weryfikacja emaila przebiegła pomyślnie.
                    Rejestracja została zakończona, teraz możesz się logować.
                  `}
                  buttonText="Przejdź do logowania"
                  href="/login"
                />
              }
            />
            <Route
              path={LOCATION.INVALID_EMAIL_VERIFICATION}
              element={
                <InformationApollo
                  title="Weryfikacja emaila"
                  redContent="Niestety, wystąpił problem podczas weryfikacji emaila."
                  blueContent="Spróbuj ponownie zweryfikować email, lub skontaktuj się z administratorami AlkohoLove."
                />
              }
            />
            <Route
              path={LOCATION.VALID_PASSWORD_CHANGE}
              element={
                <InformationApollo
                  title="Zmiana hasła"
                  greenContent="Zmiana hasła przebiegła pomyślnie"
                  buttonText="Przejdź do logowania"
                  href="/login"
                />
              }
            />
            <Route
              path={LOCATION.INVALID_PASSWORD_CHANGE}
              element={
                <InformationApollo
                  title="Zmiana hasła"
                  redContent="Niestety, wystąpił problem podczas zmiany hasła."
                  blueContent="Spróbuj ponownie zmienić hasło, lub skontaktuj się z administratorami AlkohoLove."
                />
              }
            />
            <Route
              path={LOCATION.VALID_ACCOUNT_DELETION}
              element={
                <InformationApollo
                  title="Usuwanie konta"
                  greenContent="Usuwanie konta przebiegło pomyślnie."
                />
              }
            />
            <Route
              path={LOCATION.INVALID_ACCOUNT_DELETION}
              element={
                <InformationApollo
                  title="Usuwanie konta"
                  redContent="Niestety, wystąpił problem podczas usuwania konta."
                  blueContent="Spróbuj ponownie usunąć konto, lub skontaktuj się z administratorami AlkohoLove."
                />
              }
            />
            <Route path={LOCATION.SOCIAL} element={<SocialsApollo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
