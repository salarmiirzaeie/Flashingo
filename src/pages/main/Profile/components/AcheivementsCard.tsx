import {Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React from 'react';
interface IAcheivementsCard {
  icon?: React.ReactNode;
  title: string;
  color: string;
}
const AcheivementsCard: React.FC<IAcheivementsCard> = ({
  icon,
  title,
  color,
}) => {
  return (
    <View flex={0.22} rounded={'$xl'} h={'$full'} mx={'$1'} bg={color}>
      {icon && icon}
      <Text>{title}</Text>
    </View>
  );
};

export default AcheivementsCard;
