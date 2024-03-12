import {Button, ButtonText, View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {height} from '../../../config/consts';
interface ITabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const TabBar: FC<ITabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View
      borderTopColor="$light"
      borderTopWidth={'$1'}
      alignItems="center"
      h={height / 12}
      justifyContent="space-around"
      flexDirection="row"
      bg="$white">
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const Icon = options.tabBarIcon;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && event && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Button
            onPress={onPress}
            borderWidth={isFocused ? '$1' : '$0'}
            w={48}
            h={48}
            borderColor={isFocused ? '$info' : '$white'}
            justifyContent="center"
            alignItems="center"
            bg={isFocused ? '$lightblue' : '$white'}
            key={index}
            rounded={'$xl'}>
            {Icon ? (
              Icon({
                focused: isFocused,
              })
            ) : (
              <ButtonText color={isFocused ? '#00f' : '#aaa'}>
                {label}
              </ButtonText>
            )}
          </Button>
        );
      })}
    </View>
  );
};

export default TabBar;
