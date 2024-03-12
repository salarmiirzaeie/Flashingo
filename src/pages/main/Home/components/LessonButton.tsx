import React, {FC} from 'react';
import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
  CheckIcon,
  View,
  useTheme,
} from '@gluestack-ui/themed';
import {FlexAlignType} from 'react-native';
import CircularProgress from '../../../../components/progressbar/CircularProgress';
interface ILessonButton {
  onPress: () => void;
  alignSelf: FlexAlignType;
  status: 'complete' | 'incomplete' | 'progress';
  icon?: any;
}

const LessonButton: FC<ILessonButton> = ({
  onPress,
  alignSelf,
  status,
  icon,
}) => {
  return (
    <View w={'$full'} alignItems={alignSelf}>
      {status === 'progress' ? (
        <CircularProgress
          progress={0.7}
          color={'#6740F6'}
          bgColor="lightgray"
          stroke={5}>
          <Box bg="$border" rounded="$full" alignItems="center" w={63} h={67}>
            <Button
              onPress={onPress}
              bg="$primary"
              rounded="$full"
              w={63}
              h={60}
              size="lg">
              <ButtonIcon color="$white" size="xl" as={icon} />
            </Button>
          </Box>
        </CircularProgress>
      ) : (
        <Box
          bg={
            status === 'complete'
              ? '$borderGold'
              : status === 'incomplete'
              ? '$gray'
              : '$border'
          }
          rounded="$full"
          alignItems="center"
          w={63}
          h={67}>
          <Button
            onPress={onPress}
            bg={
              status === 'complete'
                ? '$gold'
                : status === 'incomplete'
                ? '$light'
                : '$primary'
            }
            rounded="$full"
            w={63}
            h={60}
            size="lg">
            <ButtonIcon
              color="$white"
              size="xl"
              as={status === 'complete' ? CheckIcon : icon}
            />
          </Button>
        </Box>
      )}
    </View>
  );
};

export default LessonButton;
