import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'

// Make sure logger is only active during DEV mode.
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  /* enhancer is a way of composing different middleware/functions that run through each
    transformation of state of the application. All middleware should go here */
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Recipenotebook extends Component {
  render() {
    return (
      <View>
        <Text>
          To get started, edit index.ios.js
        </Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <Recipenotebook />
  </Provider>
)

AppRegistry.registerComponent('recipenotebook', () => App);
