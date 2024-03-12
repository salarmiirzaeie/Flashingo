import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthNavigation from '../auth-navigation/auth-navigation';
import {rootStackParamList} from './root-navigationType';
import MainNavigation from '../main-navigation/main-navigation';
import Splash from './components/Splash';
const Stack = createStackNavigator<rootStackParamList>();

const RootNavigation = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  if (splash) {
    return <Splash />;
  } else
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Auth" component={AuthNavigation} /> */}
          <Stack.Screen name="Main" component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default RootNavigation;
