import {View, Text} from 'react-native';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
export interface IIconProps {
  size?: number;
  color?: string;
}

const CloseIcon: FC<IIconProps> = ({size, color}) => {
  return (
    <AntDesign name="close" size={size} color={color ? color : '#6740F6'} />
  );
};

export default CloseIcon;
