import {Heading, Image, StatusBar, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import SecondaryBtn from '../../../components/button/SecondaryBtn';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
const StartPage = ({navigation}: authScreenProps) => {
  return (
    <View p={'$6'} flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <View justifyContent="center" alignItems="center" flex={1}>
        <Image
          alt="Flashingo"
          source={require('../../../assets/img/HelloLogo.png')}
          style={{width: 200, height: 200, marginLeft: 40}}
        />
        <Heading size="2xl" color="$primary">
          Flashingo
        </Heading>
        <Text size="lg" textAlign="center">
          The free, fun and effective way to learn a language
        </Text>
      </View>
      <View justifyContent="space-between" flex={0.15}>
        <PrimaryBtn
          title="Get Started"
          onPress={() => {
            navigation.navigate('SelectLanguage');
          }}
        />
        <SecondaryBtn
          title="I already have an account"
          onPress={() => {
            console.log('hello');
          }}
        />
      </View>
    </View>
  );
};

export default StartPage;
