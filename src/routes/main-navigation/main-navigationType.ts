import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParamList} from '../root-navigation/root-navigationType';
import {StackNavigationProp} from '@react-navigation/stack';
import {tabNavigationParamList} from '../tab-navigation/tab-navigationType';

export type mainStackParamList = {
  TabNavigation: undefined;
  Learn: undefined;
  Settings: undefined;
  Lesson: {
    id: number;
  };
  LevelDetails: {
    id: number;
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<
  mainStackParamList,
  'TabNavigation'
>;
export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
