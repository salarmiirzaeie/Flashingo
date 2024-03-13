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
  icon: string;
  title: string;
}
const SelectLanguage = ({navigation}: authScreenProps) => {
  const lenguages: ILanguage[] = [
    {title: 'English', icon: 'us'},
    {title: 'Germany', icon: 'de'},
  ];
  return (
    <View flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <AuthHeader navigation={navigation} />
      <View px={'$4'} flex={1}>
        <View flex={0.3}>
          <Speaker h={height / 12} message="What would you like to learn?" />
        </View>
        <View flex={1}>
          <FlatList
            data={lenguages}
            contentContainerStyle={{paddingHorizontal: 2}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Card
                onPress={() => console.log(item)}
                icon={<FlagImg name={item.icon} />}
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

export default SelectLanguage;
