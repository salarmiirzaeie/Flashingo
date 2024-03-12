import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabNavigationParamList} from './tab-navigationType';
import Home from '../../pages/main/Home/Home';
import TabBar from './components/TabBar';
import {useTheme} from '@gluestack-style/react';
import HomeHeader from '../../pages/main/Home/components/HomeHeader';
import Profile from '../../pages/main/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from '../../components/icon/Icon';
import ProfileIcon from '../../components/icon/ProfileIcon';
import BarIcon from '../../components/icon/BarIcon';
const Tab = createBottomTabNavigator<tabNavigationParamList>();

const TabNavigation = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused, color}) => (
            // <Ionicons name="home" color={focused ? '#00f' : '#458'} size={25} />
            <Icon name="home" />
          ),
          header: () => <HomeHeader />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused, color}) => (
            // <Ionicons name="home" color={focused ? '#00f' : '#458'} size={25} />
            <BarIcon />
          ),
          header: () => <HomeHeader />,
        }}
        name="Bar"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused, color}) => (
            // <Ionicons name="home" color={focused ? '#00f' : '#458'} size={25} />
            <ProfileIcon />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
