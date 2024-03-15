import {
  Divider,
  Pressable,
  ScrollView,
  Switch,
  Text,
} from '@gluestack-ui/themed';
import {Heading, View} from '@gluestack-ui/themed';
import React from 'react';
import {height} from '../../../config/consts';
import Icon from '../../../components/icon/Icon';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../stores/store';
import {setIsSettedInitialSteps} from '../../../stores/actions/initialStepsAction';

const Settings = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ScrollView>
      <View h={height} bg="$white" p={'$4'}>
        <View justifyContent="center" flex={0.07}>
          <Heading size="lg" color="$black">
            Reminders
          </Heading>
        </View>

        <View
          rounded={'$xl'}
          borderWidth={'$1'}
          borderColor="$light"
          flex={0.3}>
          <View
            p={'$2'}
            flex={0.25}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text>Practice Reminder</Text>
            <Switch />
          </View>
          <Divider bg="$light" />
          <View
            p={'$2'}
            flex={0.25}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text>Practice Reminder</Text>
            <Switch />
          </View>
          <Divider bg="$light" />
          <View
            p={'$2'}
            flex={0.25}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text>Practice Reminder</Text>
            <Switch />
          </View>
          <Divider bg="$light" />
          <View
            p={'$2'}
            flex={0.25}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text>Practice Reminder</Text>
            <Switch />
          </View>
        </View>
        <View justifyContent="center" flex={0.07}>
          <Heading size="lg" color="$black">
            Account
          </Heading>
        </View>

        <View
          rounded={'$xl'}
          borderWidth={'$1'}
          borderColor="$light"
          flex={0.23}>
          <View
            p={'$2'}
            flex={0.33}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text>Practice Reminder</Text>
            <Switch />
          </View>
          <Divider bg="$light" />
          <View
            p={'$2'}
            flex={0.33}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text>Practice Reminder</Text>
            <Switch />
          </View>
          <Divider bg="$light" />
          <Pressable
            onPress={() => dispatch(setIsSettedInitialSteps(false))}
            p={'$2'}
            flex={0.33}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text>LogOut</Text>
            <Icon name="logout" color="gray" size={30} />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
