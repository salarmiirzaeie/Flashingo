import {Image, View} from '@gluestack-ui/themed';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {height} from '../../../../config/consts';
import FlagImg from '../../../../components/image/FlagImg';
import FireIcon from '../../../../components/icon/FireIcon';
import DiamondIcon from '../../../../components/icon/DiamondIcon';
const HomeHeader = () => {
  return (
    <View
      h={height / 10}
      flexDirection="row"
      alignItems="center"
      px={'$4'}
      justifyContent="space-between"
      bg="$primary"
      borderBottomColor="$border"
      borderBottomWidth={'$1'}>
      <FlagImg name="us" />
      {/* <FireIcon />
      <DiamondIcon /> */}
      <Image
        w={40}
        h={40}
        alt="logo"
        source={require('../../../../assets/img/headLogo.png')}
      />
    </View>
  );
};

export default HomeHeader;
