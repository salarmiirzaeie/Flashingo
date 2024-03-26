import React, {useEffect, useRef, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {height, width} from '../../../../config/consts';
import FlashCard from './FlashCard';
interface FlashCardDataType {
  id: number;
  word: string;
  translate: string;
  pronunciation: string;
  example: string;
}
interface IFlashCardListProps {
  data: FlashCardDataType[];
  progress: (progress: number) => void;
}
const FlashCardList: React.FC<IFlashCardListProps> = ({data, progress}) => {
  return (
    <Carousel
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0.15 * height,

        height: height / 1.2,
      }}
      width={width}
      height={height / 1.5}
      pagingEnabled={true}
      mode={'vertical-stack'}
      loop={false}
      autoPlay={false}
      autoPlayReverse={false}
      data={data}
      modeConfig={{
        snapDirection: 'right',
        stackInterval: 20,
      }}
      onSnapToItem={index => {
        progress(data.length - index);
        data.shift();
      }}
      onProgressChange={event => {
        console.log(event);
      }}
      defaultIndex={data.length - 1}
      renderItem={({item}) => <FlashCard item={item} />}
    />
  );
};

export default FlashCardList;
