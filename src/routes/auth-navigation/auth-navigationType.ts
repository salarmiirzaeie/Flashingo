import {StackNavigationProp} from '@react-navigation/stack';

export type authStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Start: undefined;
  SelectLanguage: undefined;
  SelectLevel: undefined;
  SelectLessonTime: undefined;
  TimeToCreateProfile: undefined;
  VerifyOtp: undefined;
};
export type AuthScreenNavigationProp = StackNavigationProp<
  authStackParamList,
  'Start'
>;
export interface authScreenProps {
  navigation: AuthScreenNavigationProp;
}
