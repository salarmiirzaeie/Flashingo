import {StatusBar, Text, View} from '@gluestack-ui/themed';
import React, {ReactNode} from 'react';
import AuthHeader from '../components/AuthHeader';
import Speaker from '../../../components/popover/Speaker';
import {height} from '../../../config/consts';
import Card from '../../../components/card/Card';
import FlagImg from '../../../components/image/FlagImg';
import {FlatList} from 'react-native';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import BarProgress from '../../../components/progressbar/BarProgress';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
interface ILanguage {
  icon: ReactNode;
  title: string;
}
const SelectLevel = ({navigation}: authScreenProps) => {
  const lenguages: ILanguage[] = [
    {title: 'I know nothing', icon: <BarProgress progress={25} />},
    {title: 'I know a little', icon: <BarProgress progress={50} />},
    {
      title: 'I can have simple conversation ',
      icon: <BarProgress progress={75} />,
    },
    {
      title: 'I am intermediate or higher',
      icon: <BarProgress progress={100} />,
    },
  ];
  return (
    <View flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <AuthHeader navigation={navigation} />
      <View px={'$4'} flex={1}>
        <View flex={0.3}>
          <Speaker h={height / 10} message="How much German do you know?" />
        </View>
        <View flex={1}>
          <FlatList
            data={lenguages}
            contentContainerStyle={{paddingHorizontal: 2}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Card
                onPress={() => console.log(item)}
                icon={item.icon}
                title={item.title}
              />
            )}
          />
        </View>
        <View flex={0.15}>
          <PrimaryBtn
            title="Continue"
            onPress={() => navigation.navigate('SelectLessonTime')}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectLevel;
