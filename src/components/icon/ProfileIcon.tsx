import {View, Text} from 'react-native';
import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ProfileIcon = (props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      {...props}>
      <Path
        fill="#FFA726"
        d="M14 27a4 4 0 1 1-8 0 4 4 0 0 1 8 0m28 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
      <Path
        fill="#FFB74D"
        d="M9 20c0-12.725 30-8.284 30 0v10c0 8.284-6.716 15-15 15S9 38.284 9 30V20z"
      />
      <Path
        fill="#424242"
        d="M40.891 19.338C40.417 13.365 38.33 7.482 31 6l-2-3h-5C14.772 3 7 10.48 7 21v3.4l3 3.6v-6l21-7 7 6v7l3-3.6V21c0-.564-.043-1.117-.109-1.662"
      />
      <Path
        fill="#784719"
        d="M33 28a2 2 0 1 1-3.999.001A2 2 0 0 1 33 28m-14 0a2 2 0 1 1-3.999.001A2 2 0 0 1 19 28"
      />
      <Path fill="#FB8C00" d="M19 37h10s-2 3-5 3-5-3-5-3z" />
    </Svg>
  );
};

export default ProfileIcon;
