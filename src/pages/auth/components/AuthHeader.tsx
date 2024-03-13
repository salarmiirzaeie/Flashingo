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
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
import {useNavigation} from '@react-navigation/native';

const AuthHeader = ({navigation}: authScreenProps) => {
  return (
    <View
      flexDirection="row"
      px={'$4'}
      justifyContent="space-between"
      alignItems="center"
      h={height / 12}>
      <Pressable p={'$2'} onPress={() => navigation.goBack()}>
        <Icon name="back" color="grey" />
      </Pressable>
      <Progress value={40} bg="$light" w={'90%'} size="md">
        <ProgressFilledTrack bg="$primary" />
      </Progress>
    </View>
  );
};

export default AuthHeader;
