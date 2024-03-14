import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
const MedalIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 64 64"
    {...props}>
    <Path fill="#f9a215" d="M31 25h2v7h-2z" />
    <Path fill="#fccd1d" d="M20 22h24v5H20z" />
    <Circle cx={32} cy={45.5} r={15.5} fill="#fccd1d" />
    <Path fill="#212529" d="M23 3h18v21H23z" />
    <Path fill="#dd051d" d="M27 3h10v21H27z" />
    <Circle cx={32} cy={45.5} r={11.39} fill="#f9a215" />
    <Path
      fill="#fccd1d"
      d="m33.1 39.43 1.21 2.11a1.26 1.26 0 0 0 .85.6l2.43.48a1.22 1.22 0 0 1 .67 2l-1.67 1.78a1.22 1.22 0 0 0-.33 1l.29 2.4a1.26 1.26 0 0 1-1.78 1.27l-2.24-1a1.3 1.3 0 0 0-1.06 0l-2.24 1a1.26 1.26 0 0 1-1.78-1.27l.29-2.4a1.22 1.22 0 0 0-.33-1l-1.67-1.78a1.22 1.22 0 0 1 .67-2l2.43-.48a1.26 1.26 0 0 0 .85-.6l1.21-2.11a1.28 1.28 0 0 1 2.2 0Z"
    />
  </Svg>
);
export default MedalIcon;
