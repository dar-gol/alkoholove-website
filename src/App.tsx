import React, {useEffect} from 'react';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import AlcoholsApollo from './containers/Alcohols/Alcohols.apollo';
import HomeApollo from './containers/Home/Home.apollo';

import {Main} from './styles/global.styled';

import createTheme from './styles/theme';

const App = () => {
  const theme = createTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Routes>
          <Route path="/alcohols" element={<AlcoholsApollo />} />
          <Route path="/" element={<HomeApollo />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
};
export default App;
