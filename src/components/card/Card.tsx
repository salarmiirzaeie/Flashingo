import React, {ReactNode} from 'react';
import {Pressable, Text} from '@gluestack-ui/themed';
import {height} from '../../config/consts';
interface IProps {
  onPress: () => void;
  icon?: ReactNode;
  title: string;
  titleRight?: string;
}
const Card: React.FC<IProps> = ({onPress, icon, title, titleRight}) => {
  return (
    <Pressable
      p={'$2'}
      rounded={'$xl'}
      w={'$full'}
      h={height / 13}
      justifyContent={icon ? 'flex-start' : 'space-between'}
      mb={8}
      bg="$white"
      alignItems="center"
      borderWidth={0.5}
      borderColor="$light"
      shadowColor="#000"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={2}
      flexDirection="row"
      onPress={onPress}>
      {icon && icon}
      <Text
        mx={'$2'}
        color="$black"
        fontSize="$lg"
        fontWeight="bold"
        fontFamily="body">
        {title}
      </Text>
      <Text m={'$2'} color="$black" fontSize="$lg" fontFamily="body">
        {titleRight && titleRight}
      </Text>
    </Pressable>
  );
};

export default Card;
