import React from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
interface IPropsType {
  title: string;
  onPress: () => void;
}
const PrimaryBtn: React.FC<IPropsType> = ({title, onPress}) => {
  return (
    <Button
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
      bg="$primary">
      <ButtonText color="$white">{title}</ButtonText>
    </Button>
  );
};

export default PrimaryBtn;
