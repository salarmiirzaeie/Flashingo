import {StatusBar, Text, View} from '@gluestack-ui/themed';
import React, {ReactNode} from 'react';
import ProgressHeader from '../components/ProgressHeader';
import Speaker from '../../../components/popover/Speaker';
import {height} from '../../../config/consts';
import Card from '../../../components/card/Card';
import FlagImg from '../../../components/image/FlagImg';
import {FlatList} from 'react-native';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import BarProgress from '../../../components/progressbar/BarProgress';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../stores/store';
import {setLevel} from '../../../stores/actions/initialStepsAction';
interface ILanguage {
  icon: ReactNode;
  title: string;
  key: 1 | 2 | 3 | 4;
}

const SelectLevel = ({navigation}: authScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = React.useState<1 | 2 | 3 | 4 | null>(null);

  const lenguages: ILanguage[] = [
    {title: 'هیچی بلد نیستم', icon: <BarProgress progress={25} />, key: 1},
    {title: ' کمی بلدم', icon: <BarProgress progress={50} />, key: 2},
    {
      title: ' می‌توانم گفتگوهای ساده‌ای داشته باشم',
      icon: <BarProgress progress={75} />,
      key: 3,
    },
    {
      title: 'در سطح میانی یا بالاتر هستم',
      icon: <BarProgress progress={100} />,
      key: 4,
    },
  ];
  return (
    <View flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <ProgressHeader progress={60} navigation={navigation} />
      <View px={'$4'} flex={1}>
        <View flex={0.3}>
          <Speaker
            h={height / 10}
            message="چقدر آلمانی بلدید؟





"
          />
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
                icon={item.icon}
                title={item.title}
              />
            )}
          />
        </View>
        <View flex={0.15}>
          <PrimaryBtn
            title="ادامه"
            disabled={selected === null}
            onPress={() => {
              dispatch(setLevel(selected));
              navigation.navigate('SelectLessonTime');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectLevel;
