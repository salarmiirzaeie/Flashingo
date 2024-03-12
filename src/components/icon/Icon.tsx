import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeIcon from './HomeIcon';
interface Props {
  name: string;
  color?: string;
  size?: number;
}
const Icon: FC<Props> = ({name, color, size}) => {
  switch (name) {
    case 'home':
      return <HomeIcon />;
    case 'note':
      return (
        <MaterialIcons
          name="event-note"
          color={color ? color : 'white'}
          size={size ? size : 25}
        />
      );

    default:
      return <Ionicons name="home" color={color ? color : 'white'} size={25} />;
  }
};

export default Icon;
