import React, {useEffect} from 'react';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import HomeApollo from './containers/Home/Home.apollo';

import {Main} from './styles/global.styled';

import createTheme from './styles/theme';

const App = () => {
  const theme = createTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Routes>
          <Route path="/" element={<HomeApollo />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
};
export default App;
