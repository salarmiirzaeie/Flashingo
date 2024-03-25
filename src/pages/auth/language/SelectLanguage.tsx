import {StatusBar, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import ProgressHeader from '../components/ProgressHeader';
import Speaker from '../../../components/popover/Speaker';
import {height} from '../../../config/consts';
import Card from '../../../components/card/Card';
import FlagImg from '../../../components/image/FlagImg';
import {FlatList} from 'react-native';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../stores/store';
import {setLearnLanguage} from '../../../stores/actions/initialStepsAction';
interface ILanguage {
  icon: string;
  title: string;
  key: 'en' | 'de';
}
const SelectLanguage = ({navigation}: authScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const lenguages: ILanguage[] = [
    {title: 'انگلیسی', icon: 'us', key: 'en'},
    {title: 'آلمانی', icon: 'de', key: 'de'},
  ];
  const [selected, setSelected] = React.useState<'en' | 'de' | null>(null);
  return (
    <View flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <ProgressHeader progress={30} navigation={navigation} />
      <View px={'$4'} flex={1}>
        <View flex={0.3}>
          <Speaker h={height / 12} message="چی میخوای یادبگیری؟" />
        </View>
        <View flex={1}>
          <FlatList
            data={lenguages}
            contentContainerStyle={{paddingHorizontal: 2}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Card
                isSelected={selected === item.key}
                onPress={() => setSelected(item.key)}
                icon={<FlagImg name={item.icon} />}
                title={item.title}
              />
            )}
          />
        </View>
        <View flex={0.15}>
          <PrimaryBtn
            title="ادامه"
            disabled={selected === null ? true : false}
            onPress={() => {
              dispatch(setLearnLanguage(selected));
              navigation.navigate('SelectLevel');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectLanguage;
