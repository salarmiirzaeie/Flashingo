import {
  Button,
  ButtonText,
  Image,
  Popover,
  PopoverArrow,
  PopoverBackdrop,
  PopoverBody,
  PopoverContent,
  Text,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import {width} from '../../config/consts';
interface Props {
  w?: number;
  h?: number;
  message: string;
}
const Speaker: React.FC<Props> = ({w, h, message}) => {
  return (
    <View flex={1} flexDirection="row" alignItems="center">
      <Image
        alt="Flashingo"
        source={require('../../assets/img/writeLogo.png')}
        style={{width: 100, height: 100}}
      />
      <View alignItems="center" flexDirection="row">
        <View
          w={15}
          h={15}
          rounded={'$xs'}
          borderWidth={1}
          bg="$white"
          position="absolute"
          style={{
            borderBottomColor: '#e0e0e0',
            borderLeftColor: '#e0e0e0',
            borderRightColor: 'white',
            borderTopColor: 'white',
          }}
          transform={[{rotate: '45deg'}]}
          zIndex={2}
          left={-7}
          bottom={25}
        />
        <View
          w={w ? w : width / 1.6}
          justifyContent="center"
          rounded={'$md'}
          p={'$4'}
          borderWidth={1}
          bg="$white"
          borderColor="$light"
          h={h ? h : 100}>
          <Text color="$black">{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default Speaker;
