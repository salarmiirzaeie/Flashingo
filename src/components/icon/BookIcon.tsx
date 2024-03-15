import * as React from 'react';
import Svg, {SvgProps, Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const BookIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width={40}
    height={40}
    data-name="Layer 1"
    viewBox="0 0 64 64"
    {...props}>
    <Defs></Defs>
    <Path
      d="M32 51h-3l-2-2H10V19h4v24s12.15-3 18 8ZM50 43V19h4v30H37l-2 2h-3c5.85-11 18-8 18-8Z"
      className="cls-3"
    />
    <Path
      d="M32 51c-5.85-11-18-8-18-8V16l6-2v25c6.63 0 12 5.37 12 12ZM44 14l6 2v27s-12.15-3-18 8c0-6.63 5.37-12 12-12V14Z"
      className="cls-2"
    />
    <Path
      d="M32 25c0-6.63-5.37-12-12-12v26c6.63 0 12 5.37 12 12 0-6.63 5.37-12 12-12V13c-6.63 0-12 5.37-12 12Z"
      style={{
        fill: '#a3cef1',
      }}
    />
  </Svg>
);
export default BookIcon;
