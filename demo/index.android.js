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

import { MainTabs } from './src/components/project/App'

// export default App
AppRegistry.registerComponent('demo', () => MainTabs);
