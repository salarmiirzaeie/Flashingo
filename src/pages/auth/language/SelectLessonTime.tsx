import {StatusBar, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import AuthHeader from '../components/AuthHeader';
import Speaker from '../../../components/popover/Speaker';
import {height} from '../../../config/consts';
import Card from '../../../components/card/Card';
import FlagImg from '../../../components/image/FlagImg';
import {FlatList} from 'react-native';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
interface ILanguage {
  title2: string;
  title: string;
}
const SelectLessonTime = ({navigation}: authScreenProps) => {
  const lenguages: ILanguage[] = [
    {title: '5 min / day', title2: 'Casual'},
    {title: '10 min / day', title2: 'Regular'},
    {title: '15 min / day', title2: 'Serious'},
    {title: '20 min / day', title2: 'Intense'},
  ];
  return (
    <View flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <AuthHeader navigation={navigation} />
      <View px={'$4'} flex={1}>
        <View flex={0.3}>
          <Speaker h={height / 10} message="What is daily your lesson time?" />
        </View>
        <View flex={1}>
          <FlatList
            data={lenguages}
            contentContainerStyle={{paddingHorizontal: 2}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Card
                onPress={() => console.log(item)}
                titleRight={item.title2}
                title={item.title}
              />
            )}
          />
        </View>
        <View flex={0.15}>
          <PrimaryBtn
            title="Continue"
            onPress={() => navigation.navigate('SelectLevel')}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectLessonTime;
