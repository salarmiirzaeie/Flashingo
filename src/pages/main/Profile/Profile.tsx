import {
  CheckIcon,
  Divider,
  Heading,
  Image,
  Pressable,
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
import AirPlaneIcon from '../../../components/icon/AirPlaneIcon';
import BookIcon from '../../../components/icon/BookIcon';
import PuzzleIcon from '../../../components/icon/PuzzleIcon';
import CarIcon from '../../../components/icon/CarIcon';
import WatchIcon from '../../../components/icon/WatchIcon';
import {HomeScreenProps} from '../../../routes/main-navigation/main-navigationType';

const Profile = ({navigation}: HomeScreenProps) => {
  const isAuth = useSelector((state: RootState) => state.authorization.isAuth);
  return (
    <SafeAreaView flex={1}>
      <View bg="$white" flex={1}>
        <StatusBar backgroundColor={'$white'} />
        <ScrollView>
          <View h={height / 4} bg="$gray">
            <View
              flexDirection="row-reverse"
              h={height / 13}
              w="100%"
              alignItems="center"
              justifyContent="flex-end"
              px={'$4'}
              top={0}
              position="absolute">
              <Pressable onPress={() => navigation.navigate('Settings')}>
                <SettingsIcon size="xl" color="$white" />
              </Pressable>
            </View>
          </View>
          <View bg="$white" w="100%" p={'$4'}>
            <View
              w={'$full'}
              flexDirection="row-reverse"
              justifyContent="space-between">
              <Text color="$black" size="xl" bold>
                Salar
              </Text>
              <FlagImg name="us" />
            </View>
            <Text textAlign="right" color="$gray">
              salar95628
            </Text>
            <Text textAlign="right" color="$gray">
              تاریخ عضویت :فروردین ۱۳۹۹{' '}
            </Text>
          </View>
          <Divider bg="$light" />
          {!isAuth && <CompleteProfileAlert />}

          <View h={height / 4} bg="$white" p={'$4'}>
            <Heading textAlign="right" color="$black">
              آمار
            </Heading>
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
          <View h={height / 3.2} bg="$white" p={'$4'}>
            <Heading textAlign="right" color="$black">
              دستاوردها
            </Heading>
            <View
              borderWidth={'$1'}
              borderColor="$light"
              p={'$2'}
              flex={1}
              rounded={'$xl'}>
              <View
                mb={'$2'}
                flexDirection="row"
                flex={1}
                justifyContent="space-between">
                <AcheivementsCard
                  icon={<AirPlaneIcon />}
                  color="$info"
                  title="LEVEL4"
                />
                <AcheivementsCard
                  icon={<PuzzleIcon />}
                  color="$gray"
                  title="LEVEL5"
                />
                <AcheivementsCard
                  icon={<CarIcon />}
                  color="$success"
                  title="LEVEL6"
                />
                <AcheivementsCard
                  icon={<WatchIcon />}
                  color="$primary"
                  title="LEVEL7"
                />
              </View>
              <Divider bg="$light" />
              <View p={'$2'} alignItems="center">
                <Text>7 مورد دیگر</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
