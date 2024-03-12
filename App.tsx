import {View, Text} from 'react-native';
import React from 'react';
import MainProvider from './src/providers/main-provider';
import RootNavigation from './src/routes/root-navigation/root-navigation';

const App = () => {
  return (
    <MainProvider>
      <RootNavigation />
    </MainProvider>
  );
};

export default App;
