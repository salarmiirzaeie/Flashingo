import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {mainStackParamList} from './main-navigationType';
import TabNavigation from '../tab-navigation/tab-navigation';
const Stack = createStackNavigator<mainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
