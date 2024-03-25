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
        <Text fontFamily="negar" m={'$4'} size="4xl" color="$primary">
          فلشینگو
        </Text>
        <Text size="xl" textAlign="center">
          آسان ترین و مؤثرترین راه برای آموزش زبان
        </Text>
      </View>
      <View justifyContent="space-between" flex={0.15}>
        <PrimaryBtn
          title="شروع"
          onPress={() => {
            navigation.navigate('SelectLanguage');
          }}
        />
        <SecondaryBtn
          title="قبلا ثبت نام کرده ام"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default StartPage;
