import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyle';
import AllRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AllRoutes />
    <GlobalStyles />
  </>
);
