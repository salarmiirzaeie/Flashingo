import {Button, ButtonText, Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React from 'react';
import {height} from '../../../../config/consts';
import Icon from '../../../../components/icon/Icon';

const CompleteProfileAlert = () => {
  return (
    <View
      h={height / 4}
      w="90%"
      rounded={'$xl'}
      alignSelf="center"
      my={'$4'}
      bg={'$info'}
      p={'$6'}>
      <View flex={0.6} flexDirection="row">
        <View flex={0.3} alignItems="flex-start">
          <View
            rounded={'$full'}
            borderWidth={2}
            borderColor="$white"
            bg="$info"
            justifyContent="center"
            alignItems="center"
            w={60}
            mt={5}
            h={60}>
            <Icon name="user" size={40} />
          </View>
        </View>
        <View flex={0.7}>
          <Text color="$white" size="lg" bold>
            Complete Your Profile
          </Text>
          <Text color="$white" size="sm">
            Complete a few missing steps to have a great profile
          </Text>
        </View>
      </View>
      <View justifyContent="center" flex={0.4}>
        <Button
          shadowColor="#000"
          shadowOffset={{
            width: 0,
            height: 2,
          }}
          shadowOpacity={0.25}
          shadowRadius={3.84}
          elevation={5}
          rounded={'$xl'}
          bg="$white">
          <ButtonText color="$info">GET STARTED</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default CompleteProfileAlert;
