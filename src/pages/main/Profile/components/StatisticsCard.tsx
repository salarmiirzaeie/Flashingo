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
      flexDirection="row"
      rounded={'$xl'}>
      {icon}
      <View ml={'$1'}>
        <Text color="$black" bold>
          {value}
        </Text>
        <Text color="$gray">{title}</Text>
      </View>
    </View>
  );
};

export default StatisticsCard;
