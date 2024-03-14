import React from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
interface IPropsType {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}
const PrimaryBtn: React.FC<IPropsType> = ({title, onPress, disabled}) => {
  return (
    <Button
      disabled={disabled}
      rounded={'$xl'}
      shadowColor="#000"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={5}
      onPress={onPress}
      bg={disabled ? '$light' : '$primary'}>
      <ButtonText color={disabled ? '$gray' : '$white'}>{title}</ButtonText>
    </Button>
  );
};

export default PrimaryBtn;
