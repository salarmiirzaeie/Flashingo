import {View} from '@gluestack-ui/themed';
import React from 'react';
interface Props {
  progress: number;
}

const BarProgress: React.FC<Props> = ({progress}) => {
  return (
    <View flexDirection="row" alignItems="flex-end">
      <View w="$1.5" h="$3" rounded={'$md'} bg="$info" mx={'$0.5'} />
      <View
        w="$1.5"
        h="$5"
        rounded={'$md'}
        bg={progress > 25 ? '$info' : '$lightblue'}
        mx={'$0.5'}
      />
      <View
        w="$1.5"
        h="$8"
        rounded={'$md'}
        bg={progress > 50 ? '$info' : '$lightblue'}
        mx={'$0.5'}
      />
      <View
        w="$1.5"
        h="$10"
        rounded={'$md'}
        bg={progress > 75 ? '$info' : '$lightblue'}
        mx={'$0.5'}
      />
    </View>
  );
};

export default BarProgress;
