import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 48 48"
    {...props}>
    <Path fill="#f5bc00" d="M42 43H6V15.056L24 1.453l18 13.572z" />
    <Path
      fill="#f55376"
      d="M3.675 24.333.042 19.559 24 1.453l23.958 18.065-3.58 4.815L24.021 8.926z"
    />
    <Path
      fill="#eb0000"
      d="M6 22.573 24.021 8.926 42 22.533v-7.508L24 1.453 6 15.056z"
    />
    <Path fill="#eb7900" d="M18 27h12v16H18z" />
  </Svg>
);
export default HomeIcon;
