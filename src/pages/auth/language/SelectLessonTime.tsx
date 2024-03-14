import {StatusBar, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import AuthHeader from '../components/AuthHeader';
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
    {title: '5 min / day', title2: 'Casual', key: 1},
    {title: '10 min / day', title2: 'Regular', key: 2},
    {title: '15 min / day', title2: 'Serious', key: 3},
    {title: '20 min / day', title2: 'Intense', key: 4},
  ];
  return (
    <View flex={1} bg="$white">
      <StatusBar backgroundColor={'$white'} />
      <AuthHeader progress={90} navigation={navigation} />
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
            title="Continue"
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
