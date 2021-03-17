/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {ThemeProvider} from 'evergreen-ui';
import Theme from './Theme';
import Routes from './routes';

import Navigation from './components/shared/Navigation';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

window.__app_root = document.getElementById('app');

const Root = () => {
  return (
    // wrapping the app in the theme will allow you to make theme changes in the app
    <ThemeProvider value={Theme}>
      <ApolloProvider client={client}>
        <HashRouter basename="/">
          <Navigation />
          <Routes />
        </HashRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
};

const render = () => {
  ReactDom.render(<Root />, window.__app_root);
};

if (module.hot) {
  module.hot.accept();
}

render();
