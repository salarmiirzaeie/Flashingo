import {Heading, Pressable, Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {height, width} from '../../../../config/consts';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import VolumeIcon from '../../../../components/icon/VolumeIcon';
import LightIcon from '../../../../components/icon/LightIcon';
import RotateIcon from '../../../../components/icon/RotateIcon';
import Tts from 'react-native-tts';
interface IFlashCardProps {
  item: {
    word: string;
    translate: string;
    pronunciation: string;
    example: string;
  };
}
const FlashCard: React.FC<IFlashCardProps> = ({item}) => {
  const rotationCard = useSharedValue(0);
  const rotationContent = useSharedValue(0);
  const bgContent = useSharedValue('#fff');
  const [word, setWord] = useState(item.word);
  const [showExample, setShowExample] = useState(false);
  const startRotationAnimation = () => {
    rotationCard.value = withTiming(rotationCard.value === 0 ? 180 : 0, {
      duration: 500,
      easing: Easing.linear,
    });
    rotationContent.value = withTiming(rotationContent.value === 0 ? -180 : 0, {
      duration: 500,
      easing: Easing.linear,
    });
    bgContent.value = withTiming(
      rotationContent.value === 0 ? '#6740F6' : '#fff',
      {
        duration: 500,
        // easing: Easing.linear,
      },
    );
  };

  const rotatingBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${rotationCard.value}deg`}],
    };
  });
  const rotatingContentStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${rotationContent.value}deg`}],
      backgroundColor: bgContent.value,
    };
  });

  useAnimatedReaction(
    () => rotationCard.value,
    (newValue, oldValue) => {
      if (newValue < 90) {
        runOnJS(setWord)(item.word);
      } else {
        runOnJS(setWord)(item.translate);
      }
    },
    [rotationCard],
  );
  const speak = () => {
    Tts.speak(item.word);
  };
  return (
    <Animated.View
      style={[
        rotatingBoxStyle,
        {
          height: height / 2,

          borderRadius: 20,
          width: width / 1.2,
          alignSelf: 'center',
        },
      ]}>
      <Animated.View
        style={[
          rotatingContentStyle,
          {
            flex: 1,
            //   alignItems: 'center',
            //   justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: '#6740F6',
            padding: 10,
          },
        ]}>
        {!showExample ? (
          <View flex={1} alignItems="center" justifyContent="center">
            <Heading>{word}</Heading>
          </View>
        ) : (
          <View p={'$2'} flex={1}>
            <Text size="lg">{item.example}</Text>
          </View>
        )}
        <View
          flex={0.15}
          alignSelf="center"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          w={'60%'}>
          <Pressable $pressed-bg="$gray" onPress={speak}>
            <VolumeIcon color="gray" size={32} />
          </Pressable>
          <Pressable onPress={startRotationAnimation}>
            <RotateIcon size={32} color="gray" />
          </Pressable>
          <Pressable
            $pressed-bg="$gray"
            onPress={() => setShowExample(!showExample)}>
            <LightIcon />
          </Pressable>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default FlashCard;
