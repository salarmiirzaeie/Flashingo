import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Image} from '@gluestack-ui/themed';
interface Props {
  name: string;
}
const FlagImg: FC<Props> = ({name}) => {
  return (
    <Image
      w={32}
      h={20}
      resizeMode="cover"
      rounded={'$sm'}
      alt="flag"
      borderWidth={0.5}
      borderColor={'$white'}
      source={{uri: `https://flagcdn.com/w320/${name}.png`}}
    />
  );
};

export default FlagImg;
