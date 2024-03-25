import {StatusBar, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import ProgressHeader from '../components/ProgressHeader';
import Speaker from '../../../components/popover/Speaker';
import {height} from '../../../config/consts';
import Card from '../../../components/card/Card';
import {FlatList} from 'react-native';
import PrimaryBtn from '../../../components/button/PrimaryBtn';
import {authScreenProps} from '../../../routes/auth-navigation/auth-navigationType';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../stores/store';
import {
  setIsSettedInitialSteps,
  setLessonTime,
} from '../../../stores/actions/initialStepsAction';
interface ILanguage {
  title2: string;
  title: string;
  key: 1 | 2 | 3 | 4;
}
const SelectLessonTime = ({navigation}: authScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = React.useState<1 | 2 | 3 | 4 | null>(null);
  const lenguages: ILanguage[] = [
    {title: '5 دقیقه / روزانه', title2: 'کم', key: 1},
    {title: '10 دقیقه / روزانه', title2: 'منظم', key: 2},
    {title: '15 دقیقه / روزانه', title2: 'جدی', key: 3},
    {title: '20 دقیقه / روزانه', title2: 'خیلی جدی ام', key: 4},
  ];
  return (
    <View flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <ProgressHeader progress={90} navigation={navigation} />
      <View px={'$4'} flex={1}>
        <View flex={0.3}>
          <Speaker h={height / 10} message="روزانه چقدر زمان میخوای بگذاری؟" />
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
                titleRight={item.title2}
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
              dispatch(setLessonTime(selected));
              // dispatch(setIsSettedInitialSteps(true));

              navigation.navigate('TimeToCreateProfile');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectLessonTime;
