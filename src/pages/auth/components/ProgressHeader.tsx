import {
  Pressable,
  Progress,
  ProgressFilledTrack,
  Text,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import {height, width} from '../../../config/consts';
import Icon from '../../../components/icon/Icon';
import {
  AuthScreenNavigationProp,
  authScreenProps,
} from '../../../routes/auth-navigation/auth-navigationType';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../../routes/main-navigation/main-navigationType';
interface IProgressHeader {
  navigation: AuthScreenNavigationProp | HomeScreenNavigationProp;
  progress: number;
  barColor?: string;
  iconColor?: string;
}
const ProgressHeader: React.FC<IProgressHeader> = ({
  navigation,
  progress,
  barColor,
  iconColor,
}) => {
  return (
    <View
      flexDirection="row"
      px={'$4'}
      justifyContent="space-between"
      alignItems="center"
      h={height / 12}>
      <Pressable px={'$2'} onPress={() => navigation.goBack()}>
        <Icon name="back" color={iconColor ? iconColor : 'grey'} />
      </Pressable>
      <Progress value={progress} bg="$light" w={'85%'} size="md">
        <ProgressFilledTrack bg={barColor ? barColor : '$primary'} />
      </Progress>
    </View>
  );
};

export default ProgressHeader;
