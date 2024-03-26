import {StatusBar, View} from '@gluestack-ui/themed';
import React from 'react';
import FlashCard from './components/FlashCard';
import ProgressHeader from '../../auth/components/ProgressHeader';
import {HomeScreenProps} from '../../../routes/main-navigation/main-navigationType';
import Carousel from 'react-native-reanimated-carousel';
import {height, width} from '../../../config/consts';
import SecondaryBtn from '../../../components/button/SecondaryBtn';
import FlashCardList from './components/FlashCardList';

const Lesson = ({navigation}: HomeScreenProps) => {
  const [index, setIndex] = React.useState(0);
  const words = [
    {
      id: 0,
      word: 'Word 0',
      translate: 'کلمه 0',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 1,
      word: 'Word 1',
      translate: 'کلمه 1',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 2,
      word: 'Word 2',
      translate: 'کلمه 2',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 3,
      word: 'Word 3',
      translate: 'کلمه 3',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 4,
      word: 'Word 4',
      translate: '4',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 5,
      word: 'Word 5',
      translate: '5',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 6,
      word: 'Word 0',
      translate: 'کلمه 0',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
  ];
  return (
    <View bg={'$info'} flex={1}>
      <StatusBar backgroundColor="$info" />
      <ProgressHeader
        barColor="$skyblue"
        iconColor="white"
        navigation={navigation}
        progress={(index / words.length) * 100}
      />
      <View justifyContent="center" flex={1}>
        <FlashCardList
          progress={progress => {
            setIndex(progress);
          }}
          data={words}
        />
      </View>
      <View p={'$4'} flex={0.1}>
        <SecondaryBtn
          title="VOCAB QUIZ +10 XP"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default Lesson;
