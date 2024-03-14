import {
  CheckIcon,
  Divider,
  Heading,
  Image,
  SafeAreaView,
  ScrollView,
  SettingsIcon,
  StatusBar,
  Text,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import {height} from '../../../config/consts';
import FlagImg from '../../../components/image/FlagImg';
import CompleteProfileAlert from './components/CompleteProfileAlert';
import {useSelector} from 'react-redux';
import {RootState} from '../../../stores/store';
import StatisticsCard from './components/StatisticsCard';
import FireIcon from '../../../components/icon/FireIcon';
import DiamondIcon from '../../../components/icon/DiamondIcon';
import MedalIcon from '../../../components/icon/MedalIcon';
import AcheivementsCard from './components/AcheivementsCard';

const Profile = () => {
  const isAuth = useSelector((state: RootState) => state.authorization.isAuth);
  return (
    <SafeAreaView flex={1}>
      <View bg="$white" flex={1}>
        <StatusBar backgroundColor={'$white'} />
        <ScrollView>
          <View h={height / 4} bg="$gray">
            <View
              flexDirection="row"
              h={height / 13}
              w="100%"
              alignItems="center"
              justifyContent="flex-end"
              px={'$4'}
              top={0}
              position="absolute">
              <SettingsIcon size="xl" color="$white" />
            </View>
          </View>
          <View bg="$white" w="100%" p={'$4'}>
            <View
              w={'$full'}
              flexDirection="row"
              justifyContent="space-between">
              <Text color="$black" size="xl" bold>
                Salar
              </Text>
              <FlagImg name="us" />
            </View>
            <Text color="$gray">salar95628</Text>
            <Text color="$gray">Joined March 2022</Text>
          </View>
          <Divider bg="$light" />
          {!isAuth && <CompleteProfileAlert />}

          <View h={height / 4} bg="$white" p={'$4'}>
            <Heading color="$black">Statistics</Heading>
            <View flexDirection="row" justifyContent="space-between" flex={0.5}>
              <StatisticsCard
                icon={<FireIcon />}
                title="Day Streak"
                value="1"
              />
              <StatisticsCard
                icon={<DiamondIcon />}
                title="Day Streak"
                value="1"
              />
            </View>
            <View flexDirection="row" justifyContent="space-between" flex={0.5}>
              <StatisticsCard
                icon={<CheckIcon size="lg" color="$green" />}
                title="Day Streak"
                value="1"
              />
              <StatisticsCard
                icon={<MedalIcon />}
                title="Day Streak"
                value="1"
              />
            </View>
          </View>
          <View h={height / 4} bg="$white" p={'$4'}>
            <Heading color="$black">Acheivements</Heading>
            <View
              borderWidth={'$1'}
              borderColor="$light"
              p={'$2'}
              flex={1}
              flexDirection="row"
              justifyContent="space-between"
              rounded={'$xl'}>
              <AcheivementsCard color="$info" title="LEVEL4" />
              <AcheivementsCard color="$primary" title="LEVEL5" />
              <AcheivementsCard color="$success" title="LEVEL6" />
              <AcheivementsCard color="$warning" title="LEVEL7" />
            </View>
            {/* <View
           
              borderWidth={'$1'}
              borderColor="$light">
              <Text>View 7 more</Text>
            </View> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
