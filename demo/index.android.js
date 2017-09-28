/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  PixelRatio,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import myApp from './src/myApp'

// export default App
AppRegistry.registerComponent('demo', () => myApp);
