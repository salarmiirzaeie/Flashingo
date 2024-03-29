import React, {useEffect, useRef, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {height, width} from '../../../../config/consts';
import FlashCard from './FlashCard';
import {View} from '@gluestack-ui/themed';
import {Pressable} from '@gluestack-ui/themed';
import CloseIcon from '../../../../components/icon/CloseIcon';
import CheckIcon from '../../../../components/icon/CheckIcon';
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
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1 && carouselRef.current) {
      const nextIndex = currentIndex + 1;
      carouselRef.current.scrollTo({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }
  };
  return (
    <>
      <Carousel
        ref={carouselRef}
        style={{
          alignItems: 'center',
          justifyContent: 'center',

          height: height / 1.3,
        }}
        width={width}
        height={height / 2}
        pagingEnabled={true}
        mode={'vertical-stack'}
        loop={false}
        autoPlay={false}
        autoPlayReverse={false}
        data={data}
        modeConfig={{
          // snapDirection: 'right',
          stackInterval: 20,
        }}
        onSnapToItem={index => {
          setCurrentIndex(index);
          progress(index);
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, width], // Only allow swiping to the right
        }}
        // defaultIndex={data.length - 1}
        renderItem={({item}) => <FlashCard item={item} />}
      />
      <View flexDirection="row" justifyContent="space-between" p={'$6'}>
        <Pressable onPress={handleNext} p={'$3'} rounded={'$xl'} bg="$white">
          <CloseIcon size={32} />
        </Pressable>
        <Pressable onPress={handleNext} p={'$3'} rounded={'$xl'} bg="$white">
          <CheckIcon size={32} />
        </Pressable>
      </View>
    </>
  );
};

export default FlashCardList;
