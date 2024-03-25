import React, {ReactNode} from 'react';
import {Pressable, Text} from '@gluestack-ui/themed';
import {height} from '../../config/consts';
interface IProps {
  onPress: () => void;
  icon?: ReactNode;
  title: string;
  titleRight?: string;
  isSelected?: boolean;
}
const Card: React.FC<IProps> = ({
  onPress,
  icon,
  title,
  titleRight,
  isSelected,
}) => {
  return (
    <Pressable
      p={'$2'}
      rounded={'$xl'}
      w={'$full'}
      h={height / 13}
      justifyContent={icon ? 'flex-start' : 'space-between'}
      mb={8}
      bg={isSelected ? '$lightblue' : '$white'}
      alignItems="center"
      borderWidth={0.5}
      borderColor={isSelected ? '$info' : '$light'}
      shadowColor="#000"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={2}
      flexDirection="row-reverse"
      onPress={onPress}>
      {icon && icon}
      <Text m={'$2'} color="$black" fontSize="$lg" fontFamily="body">
        {titleRight && titleRight}
      </Text>
      <Text
        mx={'$2'}
        color="$black"
        fontSize="$lg"
        fontWeight="bold"
        fontFamily="body">
        {title}
      </Text>
    </Pressable>
  );
};

export default Card;
