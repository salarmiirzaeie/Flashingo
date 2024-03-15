import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {mainStackParamList} from './main-navigationType';
import TabNavigation from '../tab-navigation/tab-navigation';
import Lesson from '../../pages/main/FlashCard/Lesson';
import Settings from '../../pages/main/Settings/Settings';
import LevelDetails from '../../pages/main/LevelDetail/LevelDetails';
const Stack = createStackNavigator<mainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="LevelDetails" component={LevelDetails} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'gray'},
        }}
        name="Settings"
        component={Settings}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
