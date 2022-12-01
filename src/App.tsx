import React, {useEffect} from 'react';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components';
import {Toaster} from 'react-hot-toast';
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

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const theme = createTheme('light');

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Toaster position="top-center" gutter={20} />
        <Main>
          <Routes>
            <Route path="/alcohols" element={<AlcoholsApollo />} />
            <Route path="/" element={<HomeApollo />} />
            <Route
              path="/alcohol/:alcoholBarcode"
              element={<AlcoholDetailsApollo />}
            />
            <Route path="/login" element={<LoginApollo />} />
            <Route path="/logout" element={<LogoutView />} />
            <Route path="/register" element={<RegisterApollo />} />
            <Route path="/reset_password" element={<ResetPasswordApollo />} />
            <Route
              path="/reset_password/:token"
              element={<ChangePasswordApollo />}
            />
            <Route
              path="/confirm_register"
              element={
                <InformationApollo
                  title="Potwierdzenie konta"
                  greenContent="Na podany email został wysłany mail weryfilacyjny. Pamiętaj sprawdzić spam."
                  yellowContent="Nie jest możliwe logowanie do AlkohoLove przed potwierdzeniem
                  konta."
                  buttonText="Przejdź do logowania"
                  href="/login"
                />
              }
            />
            <Route
              path="/confirm_reset_password"
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
              path="/valid_email_verification"
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
              path="/invalid_email_verification"
              element={
                <InformationApollo
                  title="Weryfikacja emaila"
                  redContent="Niestety, wystąpił problem podczas weryfikacji emaila."
                  blueContent="Spróbuj ponownie zweryfikować email, lub skontaktuj się z administratorami AlkohoLove."
                />
              }
            />
            <Route
              path="/valid_password_change"
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
              path="/invalid_password_change"
              element={
                <InformationApollo
                  title="Zmiana hasła"
                  redContent="Niestety, wystąpił problem podczas zmiany hasła."
                  blueContent="Spróbuj ponownie zmienić hasło, lub skontaktuj się z administratorami AlkohoLove."
                />
              }
            />
            <Route
              path="/valid_account_deletion"
              element={
                <InformationApollo
                  title="Usuwanie konta"
                  greenContent="Usuwanie konta przebiegło pomyślnie."
                />
              }
            />
            <Route
              path="/invalid_account_deletion"
              element={
                <InformationApollo
                  title="Usuwanie konta"
                  redContent="Niestety, wystąpił problem podczas usuwania konta."
                  blueContent="Spróbuj ponownie usunąć konto, lub skontaktuj się z administratorami AlkohoLove."
                />
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
