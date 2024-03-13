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
import {useSelector} from 'react-redux';
import {RootState} from '../../stores/store';
const Stack = createStackNavigator<rootStackParamList>();

const RootNavigation = () => {
  const [splash, setSplash] = useState(true);
  const isAuth = useSelector((state: RootState) => state.authorization.isAuth);
  console.log(isAuth);
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
          {isAuth ? (
            <Stack.Screen name="Main" component={MainNavigation} />
          ) : (
            <Stack.Screen name="Auth" component={AuthNavigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default RootNavigation;
