import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {GlobalStyle} from './styles/global.styled';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
);
