import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const DiamondIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}>
    <Path
      d="m0 178.019 255.999 289.862L512 178.019l-112.777-133.9H112.777z"
      style={{
        fill: '#fff',
      }}
    />
    <Path
      d="M158.032 178.019H0l255.999 289.862z"
      style={{
        fill: '#6ff7ff',
      }}
    />
    <Path
      d="M512 178.019H353.968l-97.969 289.862z"
      style={{
        fill: '#3cc8d8',
      }}
    />
    <Path
      d="M353.968 178.019H158.032l97.967 289.862zM112.777 44.119 0 178.019h158.032z"
      style={{
        fill: '#52e6f8',
      }}
    />
    <Path
      d="M353.968 178.019H512l-112.777-133.9z"
      style={{
        fill: '#0ca7a6',
      }}
    />
    <Path
      d="M399.223 44.119H255.998l97.97 133.9z"
      style={{
        fill: '#52e6f8',
      }}
    />
    <Path
      d="m158.032 178.019 97.966-133.9H112.777z"
      style={{
        fill: '#6ff7ff',
      }}
    />
    <Path
      d="M158.032 178.019h195.936l-97.97-133.9z"
      style={{
        fill: '#3cc8d8',
      }}
    />
  </Svg>
);
export default DiamondIcon;
