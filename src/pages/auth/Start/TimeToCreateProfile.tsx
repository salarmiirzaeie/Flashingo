import {Heading, Image, StatusBar, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import SecondaryBtn from '../../../components/button/SecondaryBtn';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../stores/store';
import {setIsSettedInitialSteps} from '../../../stores/actions/initialStepsAction';
const TimeToCreateProfile = ({navigation}: authScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View p={'$6'} flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <View justifyContent="center" alignItems="center" flex={1}>
        <Image
          alt="Flashingo"
          source={require('../../../assets/img/walkingLogo.png')}
          style={{width: 200, height: 200}}
        />
        <Heading size="xl" color="$black">
          Time to create your profile
        </Heading>
        <Text size="lg" textAlign="center">
          create profile to save your progress and continue learning for free
        </Text>
      </View>
      <View justifyContent="space-between" flex={0.15}>
        <PrimaryBtn
          title="Create Profile"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <SecondaryBtn
          title="Later"
          onPress={() => {
            dispatch(setIsSettedInitialSteps(true));
          }}
        />
      </View>
    </View>
  );
};

export default TimeToCreateProfile;
