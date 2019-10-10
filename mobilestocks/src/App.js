import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#CCC" />
      <Routes />
    </Provider>
  );
}
