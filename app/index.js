/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component }  from 'react';
import Router from './router';
import dva from './utils/dva';

const app = dva({
  initialState: {},
  models: [require('./models/userList').default],
  onError(e) {
    console.log('onError', e)
  },
});

const App = app.start(<Router />);

export default App;
