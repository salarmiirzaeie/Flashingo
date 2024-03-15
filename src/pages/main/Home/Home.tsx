import React, {ReactNode, useState} from 'react';
import {
  HelpCircleIcon,
  PhoneIcon,
  ScrollView,
  StarIcon,
  StatusBar,
  View,
} from '@gluestack-ui/themed';
import UnitHeader from './components/UnitHeader';
import LessonButton from './components/LessonButton';
import {height} from '../../../config/consts';
import {FlexAlignType} from 'react-native';
import {FavouriteIcon} from '@gluestack-ui/themed';
import {HomeScreenProps} from '../../../routes/main-navigation/main-navigationType';

const Home = ({navigation}: HomeScreenProps) => {
  const alignTypes: FlexAlignType[] = ['flex-start', 'center', 'flex-end'];

  const lessons: {
    id: number;
    status: 'complete' | 'incomplete' | 'progress';
    icon?: any;
  }[] = [
    {id: 1, status: 'complete', icon: StarIcon},
    {id: 2, status: 'complete', icon: PhoneIcon},
    {id: 3, status: 'complete', icon: StarIcon},
    {id: 4, status: 'progress', icon: FavouriteIcon},
    {id: 5, status: 'incomplete', icon: StarIcon},
    {id: 6, status: 'incomplete', icon: PhoneIcon},
    {id: 7, status: 'incomplete', icon: StarIcon},
    {id: 8, status: 'incomplete', icon: StarIcon},
  ];

  function customSequence(n: number) {
    const values = [0, 1, 2, 1];
    return values[n % values.length];
  }

  return (
    <ScrollView bg="$white">
      <StatusBar backgroundColor={'$primary'} />
      <UnitHeader navigation={navigation} />
      <View p={'$16'} justifyContent="space-between">
        {lessons.map((item, index) => {
          const alignSelfType = alignTypes[customSequence(index)];

          return (
            <LessonButton
              icon={item.icon}
              status={item.status}
              key={item.id}
              onPress={() => navigation.navigate('Lesson', {id: item.id})}
              alignSelf={alignSelfType}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
