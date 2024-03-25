import React from 'react';

import {authStackParamList} from './auth-navigationType';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../pages/auth/login/Login';
import StartPage from '../../pages/auth/Start/StartPage';
import SelectLanguage from '../../pages/auth/language/SelectLanguage';
import SelectLevel from '../../pages/auth/language/SelectLevel';
import SelectLessonTime from '../../pages/auth/language/SelectLessonTime';
import TimeToCreateProfile from '../../pages/auth/Start/TimeToCreateProfile';
import SignUp from '../../pages/auth/signup/SignUp';
import VerifyOtp from '../../pages/auth/signup/VerifyOtp';
const Stack = createStackNavigator<authStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="Start" component={StartPage} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      <Stack.Screen name="SelectLevel" component={SelectLevel} />
      <Stack.Screen name="SelectLessonTime" component={SelectLessonTime} />
      <Stack.Screen
        name="TimeToCreateProfile"
        component={TimeToCreateProfile}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'gray'},
          headerStyle: {
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          },
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="VerifyOtp"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'gray'},
          headerStyle: {
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          },
        }}
        component={VerifyOtp}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
