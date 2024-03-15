import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Feather from 'react-native-vector-icons/Feather';

interface IIconProps {
  size?: number;
  color?: string;
}
const VolumeIcon: FC<IIconProps> = ({size, color}) => {
  return <Feather name="volume-2" size={size} color={color} />;
};

export default VolumeIcon;
