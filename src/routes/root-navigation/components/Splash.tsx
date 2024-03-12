import {Image, StatusBar, Text, View} from '@gluestack-ui/themed';
import React from 'react';

const Splash = () => {
  return (
    <View flex={1} alignItems="center">
      <StatusBar backgroundColor={'$white'} />
      <View justifyContent="center" alignItems="center" flex={1}>
        <Image
          alt="Flashingo"
          source={require('../../../assets/img/splash.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      <View flex={0.1}>
        <Text>Flashingo</Text>
      </View>
    </View>
  );
};

export default Splash;
