import {Button, ButtonIcon, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import {height} from '../../../../config/consts';
import Icon from '../../../../components/icon/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreenProps} from '../../../../routes/main-navigation/main-navigationType';

const UnitHeader = ({navigation}: HomeScreenProps) => {
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
        onPress={() =>
          navigation.navigate('LevelDetails', {
            id: 1,
          })
        }
        w="$12"
        h="$12"
        size="lg"
        rounded={'$xl'}
        borderColor="$border"
        borderWidth={'$1'}>
        <ButtonIcon
          as={MaterialCommunityIcons}
          name="information"
          size={'xl'}
          color="$white"
        />
      </Button>
    </View>
  );
};

export default UnitHeader;
