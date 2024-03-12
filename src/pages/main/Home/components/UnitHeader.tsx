import {Button, ButtonIcon, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import {height} from '../../../../config/consts';
import Icon from '../../../../components/icon/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UnitHeader = () => {
  return (
    <View
      h={height / 10}
      bg="$primary"
      px={'$4'}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row">
      <View>
        <Text color="$white" bold>
          Basic
        </Text>
        <Text color="$white">Use Basic Phrases</Text>
      </View>
      <Button
        w="$12"
        h="$12"
        size="lg"
        borderColor="$border"
        borderWidth={'$1'}>
        <ButtonIcon
          as={MaterialIcons}
          name="event-note"
          size={'xl'}
          color="$white"
        />
      </Button>
    </View>
  );
};

export default UnitHeader;
