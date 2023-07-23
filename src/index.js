import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyle';
import App from './containers/Orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
