import React from 'react';
import OtpInput from './components/OtpInput';
import {View} from '@gluestack-ui/themed';
import {height} from '../../../config/consts';
import {Text} from '@gluestack-ui/themed';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import {useDispatch} from 'react-redux';
import {setIsSettedInitialSteps} from '../../../stores/actions/initialStepsAction';

const VerifyOtp = () => {
  const dispatch = useDispatch();
  return (
    <View p={'$6'} bg="$white" flex={1}>
      <View justifyContent="space-between" flex={0.3}>
        <Text textAlign="center" color="$gray" bold size="lg">
          لطفا کد ارسال شده به شماره موبایل خود را وارد کنید{' '}
        </Text>
        <View alignItems="center">
          <OtpInput />
        </View>
        <PrimaryBtn
          onPress={() => {
            dispatch(setIsSettedInitialSteps(true));
          }}
          title="تایید"
        />
      </View>
    </View>
  );
};

export default VerifyOtp;
