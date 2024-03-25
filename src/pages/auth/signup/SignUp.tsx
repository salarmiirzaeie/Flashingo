import {Divider, Text} from '@gluestack-ui/themed';
import {Input, InputField, InputSlot, View} from '@gluestack-ui/themed';
import React from 'react';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
import {useSendSmsMutation} from '../../../services/auth/authApi';

const SignUp = ({navigation}: authScreenProps) => {
  const [sendSms, {isLoading, isError, error}] = useSendSmsMutation();
  return (
    <View flex={1} p={'$6'} bg="$white">
      <View flex={0.25} justifyContent="space-between">
        <Text color="$gray" bold size="lg">
          لطفا شماره موبایل خود را وارد کنید
        </Text>
        <Input size="lg" borderColor="$light" bg="$lightgray" rounded={'$lg'}>
          <InputSlot flexDirection="row">
            <Text m={'$2'} color="$gray" size="lg" bold>
              +98
            </Text>
            <Divider h="70%" orientation="vertical" bg="$light" />
          </InputSlot>
          <InputField alignItems="center" placeholder="9 - - - - - - - - -" />
        </Input>
        <PrimaryBtn
          onPress={() => {
            sendSms({phoneNumber: '+989222541680'}).then(() => {
              navigation.navigate('VerifyOtp');
            });
          }}
          title="ادامه"
        />
      </View>
    </View>
  );
};

export default SignUp;
