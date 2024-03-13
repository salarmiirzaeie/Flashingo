import {StackNavigationProp} from '@react-navigation/stack';

export type authStackParamList = {
  Login: undefined;
  Start: undefined;
  SelectLanguage: undefined;
  SelectLevel: undefined;
  SelectLessonTime: undefined;
};
export type HomeScreenNavigationProp = StackNavigationProp<
  authStackParamList,
  'Start'
>;
export interface authScreenProps {
  navigation: HomeScreenNavigationProp;
}
