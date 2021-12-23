import React from 'react';
import { LogBox } from 'react-native';
import RootNavigation from './RootNavigation';

export default function App() {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"])
  return (
    <RootNavigation />
  );
}

