import {Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React, {ReactNode} from 'react';
interface IStatisticsCard {
  icon: ReactNode;
  title: string;
  value: string;
}
const StatisticsCard: React.FC<IStatisticsCard> = ({icon, title, value}) => {
  return (
    <View
      flex={1}
      borderColor="$light"
      m={'$1.5'}
      borderWidth={'$1'}
      p={'$1.5'}
      flexDirection="row-reverse"
      rounded={'$xl'}>
      {icon}
      <View ml={'$1'}>
        <Text textAlign="right" color="$black" bold>
          {value}
        </Text>
        <Text textAlign="right" color="$gray">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default StatisticsCard;
