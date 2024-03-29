import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SettingsIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#2A4157"
      fillOpacity={0.24}
      fillRule="evenodd"
      d="M13.984 2.542c.087.169.109.386.152.82.082.82.123 1.23.295 1.456a1 1 0 0 0 .929.384c.28-.037.6-.298 1.238-.82.337-.277.506-.415.687-.473a1 1 0 0 1 .702.035c.175.076.33.23.637.538l.894.894c.308.308.462.462.538.637a1 1 0 0 1 .035.702c-.058.181-.196.35-.472.687-.523.639-.784.958-.822 1.239a1 1 0 0 0 .385.928c.225.172.636.213 1.457.295.433.043.65.065.82.152a1 1 0 0 1 .47.521c.071.177.071.395.071.831v1.264c0 .436 0 .654-.07.83a1 1 0 0 1-.472.522c-.169.087-.386.109-.82.152-.82.082-1.23.123-1.456.295a1 1 0 0 0-.384.929c.038.28.299.6.821 1.238.276.337.414.505.472.687a1 1 0 0 1-.035.702c-.076.175-.23.329-.538.637l-.894.893c-.308.309-.462.463-.637.538a1 1 0 0 1-.702.035c-.181-.058-.35-.196-.687-.472-.639-.522-.958-.783-1.238-.82a1 1 0 0 0-.929.384c-.172.225-.213.635-.295 1.456-.043.434-.065.651-.152.82a1 1 0 0 1-.521.472c-.177.07-.395.07-.831.07h-1.264c-.436 0-.654 0-.83-.07a1 1 0 0 1-.522-.472c-.087-.169-.109-.386-.152-.82-.082-.82-.123-1.23-.295-1.456a1 1 0 0 0-.928-.384c-.281.037-.6.298-1.239.82-.337.277-.506.415-.687.473a1 1 0 0 1-.702-.035c-.175-.076-.33-.23-.637-.538l-.894-.894c-.308-.308-.462-.462-.538-.637a1 1 0 0 1-.035-.702c.058-.181.196-.35.472-.687.523-.639.784-.958.821-1.239a1 1 0 0 0-.384-.928c-.225-.172-.636-.213-1.457-.295-.433-.043-.65-.065-.82-.152a1 1 0 0 1-.47-.521C2 13.286 2 13.068 2 12.632v-1.264c0-.436 0-.654.07-.83a1 1 0 0 1 .472-.522c.169-.087.386-.109.82-.152.82-.082 1.231-.123 1.456-.295a1 1 0 0 0 .385-.928c-.038-.281-.3-.6-.822-1.24-.276-.337-.414-.505-.472-.687a1 1 0 0 1 .035-.702c.076-.174.23-.329.538-.637l.894-.893c.308-.308.462-.463.637-.538a1 1 0 0 1 .702-.035c.181.058.35.196.687.472.639.522.958.783 1.238.821a1 1 0 0 0 .93-.385c.17-.225.212-.635.294-1.456.043-.433.065-.65.152-.82a1 1 0 0 1 .521-.471c.177-.07.395-.07.831-.07h1.264c.436 0 .654 0 .83.07a1 1 0 0 1 .522.472ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <Path
      fill="#33363F"
      d="m14.136 3.361.597-.06-.597.06Zm-.152-.82-.534.276.534-.275Zm.447 2.277.477-.364-.477.364Zm.929.384-.08-.594.08.594Zm1.238-.82.38.464-.38-.465Zm.687-.473.183.572-.183-.572Zm.702.035.239-.55-.239.55Zm.637.538-.424.424.424-.424Zm.894.894.424-.425-.424.425Zm.538.637.55-.239-.55.239Zm.035.702.571.182-.571-.182Zm-.472.687-.465-.38.465.38Zm-.822 1.239-.594-.08.595.08Zm.385.928-.364.477.364-.477Zm1.457.295.06-.597-.06.597Zm.82.152.274-.533-.275.533Zm.47.521.559-.22-.558.22Zm.001 2.926-.558-.22.558.22Zm-.472.52.275.534-.275-.533Zm-.82.153-.06-.597-.019.002-.019.003.099.592Zm0 0 .06.597.02-.002.02-.003-.1-.592Zm-1.456.295-.363-.477.364.477Zm-.384.929-.595.08.595-.08Zm.821 1.238-.464.38.464-.38Zm.472.687-.572.182.572-.182Zm-.035.702-.55-.239.55.239Zm-.538.637.424.424-.424-.424Zm-.894.893-.424-.424.424.424Zm-.637.538.239.55-.239-.55Zm-.702.035-.182.572.182-.572Zm-.687-.472.38-.464-.005-.004-.375.468Zm0 0-.38.465.005.004.375-.469Zm-1.238-.82.08-.596-.08.595Zm-.929.384.477.364-.477-.364Zm-.295 1.456-.597-.06.597.06Zm-.152.82-.534-.275.534.276Zm-.521.472-.22-.558.22.558Zm-2.926 0 .22-.558-.22.558Zm-.52-.472.533-.275-.534.275Zm-.153-.82-.597.06.597-.06Zm-.295-1.456-.477.364.477-.364Zm-.928-.384-.08-.595.08.595Zm-1.239.82-.38-.463-.01.007-.009.008.4.449Zm0 0 .38.465.01-.007.009-.009-.399-.448Zm-.687.473.182.571-.182-.571Zm-.702-.035-.239.55.239-.55Zm-.637-.538.424-.425-.424.425Zm-.894-.894-.424.425.424-.425Zm-.538-.637.55-.238-.55.238Zm-.035-.702.572.183-.572-.183Zm.472-.687.464.38-.464-.38Zm.821-1.239.595.08-.595-.08Zm-.384-.928.364-.477-.364.477Zm-1.457-.295-.06.597.06-.597Zm-.82-.152.276-.534-.275.534Zm-.47-.521-.559.22.558-.22Zm0-2.926-.559-.22.558.22Zm.47-.52-.275-.534.276.533Zm.82-.153v-.6h-.03l-.03.003.06.597Zm0 0v.6h.03l.03-.003-.06-.597Zm1.457-.295-.364-.477.364.477Zm.385-.928.595-.08-.595.08ZM4.38 7.4l.465-.38-.465.38Zm-.472-.687.572-.182-.572.182Zm.035-.702-.55-.238.55.238Zm.538-.637.425.424-.425-.424Zm.894-.893-.425-.425.425.425Zm.637-.538-.239-.55.239.55Zm.702-.035.182-.572-.182.572Zm.687.472.38-.465-.38.465Zm1.238.821.08-.595-.08.595Zm.93-.385-.478-.363.477.363Zm.294-1.456.597.06-.597-.06Zm.152-.82-.533-.274.533.275Zm.521-.471.221.558-.22-.558Zm2.926 0 .22-.558-.22.558Zm1.27 1.232c-.02-.21-.039-.395-.065-.549a1.624 1.624 0 0 0-.151-.486l-1.066.55a.489.489 0 0 1 .034.135c.017.105.032.244.054.47l1.194-.12Zm.175 1.152c.004.005-.03-.037-.067-.247a13.25 13.25 0 0 1-.108-.905l-1.194.12c.04.4.073.735.12.997.047.257.12.533.295.763l.954-.728Zm.372.154a.4.4 0 0 1-.372-.154l-.954.728a1.6 1.6 0 0 0 1.485.615l-.16-1.19Zm.938-.691a13.26 13.26 0 0 1-.716.564c-.176.122-.228.128-.223.127l.16 1.19c.287-.04.534-.183.748-.332.219-.152.48-.366.79-.62l-.76-.93Zm.885-.58a1.624 1.624 0 0 0-.451.238c-.127.09-.272.209-.434.342l.76.929c.175-.144.283-.232.37-.294a.486.486 0 0 1 .12-.071l-.365-1.143Zm1.123.057a1.6 1.6 0 0 0-1.123-.056l.365 1.143a.4.4 0 0 1 .28.014l.478-1.101Zm.823.664c-.149-.149-.28-.28-.398-.384a1.625 1.625 0 0 0-.425-.28l-.477 1.1a.487.487 0 0 1 .112.084c.08.07.18.169.339.328l.849-.848Zm.893.893-.893-.893-.849.848.893.894.849-.849Zm.664.823a1.623 1.623 0 0 0-.28-.425c-.103-.117-.236-.25-.384-.398l-.849.849c.16.16.26.259.33.34.066.075.079.104.082.111l1.101-.477Zm.056 1.123a1.6 1.6 0 0 0-.056-1.123l-1.1.477a.4.4 0 0 1 .013.281l1.143.365Zm-.579.885c.133-.162.252-.307.342-.434.094-.132.182-.277.237-.45l-1.143-.366a.483.483 0 0 1-.071.12c-.062.087-.15.195-.294.37l.93.76Zm-.69.939c-.002.005.004-.048.126-.223.119-.17.297-.389.564-.716l-.928-.76c-.255.312-.47.572-.621.791-.149.214-.293.461-.331.748l1.19.16Zm.153.37a.4.4 0 0 1-.154-.37l-1.19-.16a1.6 1.6 0 0 0 .616 1.485l.728-.954Zm1.152.176c-.42-.042-.7-.07-.905-.107-.21-.038-.252-.072-.247-.068l-.728.954c.23.175.506.248.763.295.262.047.598.08.998.12l.12-1.194Zm1.035.216a1.623 1.623 0 0 0-.486-.151c-.154-.026-.34-.044-.549-.065l-.12 1.194c.226.022.365.037.47.054.1.017.128.03.135.034l.55-1.066Zm.755.834a1.6 1.6 0 0 0-.755-.834l-.55 1.066a.4.4 0 0 1 .189.209l1.116-.441Zm.112 1.051c0-.21 0-.396-.01-.552a1.624 1.624 0 0 0-.102-.5l-1.116.442a.49.49 0 0 1 .02.138c.008.106.008.246.008.472h1.2Zm0 1.264v-1.264h-1.2v1.264h1.2Zm-.112 1.051c.067-.17.091-.337.102-.499.01-.155.01-.342.01-.552h-1.2c0 .226 0 .366-.007.472a.487.487 0 0 1-.021.138l1.116.441Zm-.755.834a1.6 1.6 0 0 0 .755-.834l-1.116-.44a.4.4 0 0 1-.189.207l.55 1.067Zm-1.035.216c.21-.02.395-.039.549-.065.16-.027.324-.067.486-.15l-.55-1.068a.487.487 0 0 1-.135.035 7.969 7.969 0 0 1-.47.054l.12 1.194Zm.04-.005-.198-1.184.197 1.184Zm-1.192.18c-.004.004.037-.03.248-.068.204-.036.484-.065.904-.107l-.12-1.194c-.4.04-.735.073-.997.12-.256.046-.532.12-.762.295l.727.954Zm-.154.372a.4.4 0 0 1 .154-.372l-.727-.954a1.6 1.6 0 0 0-.616 1.486l1.19-.16Zm.691.938a13.173 13.173 0 0 1-.563-.716c-.122-.175-.128-.228-.128-.223l-1.189.16c.039.287.183.534.331.748.152.218.366.48.62.79l.93-.76Zm.58.884a1.625 1.625 0 0 0-.238-.45c-.09-.128-.209-.272-.342-.434l-.928.76c.143.174.231.283.293.37a.492.492 0 0 1 .071.12l1.143-.366Zm-.057 1.124a1.6 1.6 0 0 0 .056-1.124l-1.143.365a.4.4 0 0 1-.014.281l1.101.478Zm-.664.822c.149-.148.28-.28.384-.398.106-.121.208-.257.28-.424l-1.1-.478a.489.489 0 0 1-.084.112c-.07.08-.169.18-.328.34l.848.848Zm-.893.894.893-.894-.848-.848-.894.893.849.849Zm-.823.664c.167-.073.303-.174.425-.28.117-.104.25-.236.398-.384l-.849-.849c-.16.16-.259.259-.34.329a.485.485 0 0 1-.111.083l.477 1.1Zm-1.123.056a1.6 1.6 0 0 0 1.123-.056l-.477-1.101a.4.4 0 0 1-.281.014l-.365 1.143Zm-.885-.58c.163.134.307.252.434.343.132.094.277.181.45.237l.366-1.143a.49.49 0 0 1-.12-.071 7.992 7.992 0 0 1-.37-.294l-.76.929Zm.005.005.75-.937-.75.937Zm-.943-.695c-.006-.001.047.005.222.127.17.118.389.296.716.564l.76-.929c-.312-.255-.572-.469-.791-.62-.214-.15-.46-.293-.748-.332l-.16 1.19Zm-.372.154a.4.4 0 0 1 .372-.154l.16-1.19a1.6 1.6 0 0 0-1.486.616l.954.727Zm-.175 1.152c.042-.42.07-.7.107-.905.038-.21.072-.252.068-.247l-.954-.728c-.175.23-.248.506-.295.762-.047.262-.08.598-.12.999l1.194.119Zm-.216 1.036c.084-.163.124-.327.151-.487.026-.154.044-.34.065-.549l-1.194-.12a7.9 7.9 0 0 1-.054.47.49.49 0 0 1-.034.135l1.066.55Zm-.833.754a1.6 1.6 0 0 0 .833-.754l-1.066-.55a.4.4 0 0 1-.209.188l.441 1.116Zm-1.052.112c.21 0 .396 0 .552-.01.162-.01.33-.035.5-.102l-.442-1.116a.49.49 0 0 1-.138.02 8.012 8.012 0 0 1-.472.008v1.2Zm-1.264 0h1.264v-1.2h-1.264v1.2Zm-1.051-.112c.17.067.337.091.499.102.155.01.342.01.552.01v-1.2c-.226 0-.366 0-.472-.007a.49.49 0 0 1-.138-.021l-.441 1.116Zm-.834-.755a1.6 1.6 0 0 0 .834.755l.44-1.116a.4.4 0 0 1-.207-.189l-1.067.55Zm-.216-1.035c.02.21.039.395.065.549.027.16.067.324.151.486l1.066-.55a.49.49 0 0 1-.034-.135 7.992 7.992 0 0 1-.054-.47l-1.194.12Zm-.175-1.152c-.004-.005.03.037.068.247.036.205.065.485.107.905l1.194-.12c-.04-.4-.073-.735-.12-.997-.047-.257-.12-.533-.295-.763l-.954.728Zm-.371-.154a.4.4 0 0 1 .37.154l.955-.728a1.6 1.6 0 0 0-1.485-.615l.16 1.19Zm-.939.691c.327-.267.545-.445.716-.564.175-.122.228-.128.223-.127l-.16-1.19c-.287.04-.534.183-.748.332-.219.152-.48.366-.79.62l.759.93Zm.019-.016-.798-.897.798.897Zm-.904.595c.174-.055.319-.143.451-.237.127-.09.272-.209.434-.342l-.76-.928a7.982 7.982 0 0 1-.37.293.49.49 0 0 1-.12.071l.365 1.143Zm-1.123-.056a1.6 1.6 0 0 0 1.123.056l-.365-1.143a.4.4 0 0 1-.28-.014l-.478 1.101Zm-.823-.664c.149.148.28.28.398.384.122.106.258.208.425.28l.477-1.1a.49.49 0 0 1-.112-.084c-.08-.07-.18-.169-.34-.329l-.848.85Zm-.893-.893.893.893.849-.849-.894-.893-.848.849Zm-.664-.823c.072.167.174.303.28.425.103.117.235.25.384.398l.848-.849a7.919 7.919 0 0 1-.328-.34.487.487 0 0 1-.083-.111l-1.101.477Zm-.056-1.123a1.6 1.6 0 0 0 .056 1.123l1.1-.477a.4.4 0 0 1-.013-.281l-1.143-.365Zm.579-.885c-.133.162-.252.307-.342.434a1.625 1.625 0 0 0-.237.45l1.143.366a.488.488 0 0 1 .071-.12c.062-.087.15-.195.293-.37l-.928-.76Zm.69-.938c.002-.006-.004.046-.126.222-.119.17-.297.389-.564.716l.928.76c.255-.312.47-.572.621-.791.149-.214.293-.461.331-.748l-1.19-.16Zm-.153-.372a.4.4 0 0 1 .154.372l1.19.16a1.6 1.6 0 0 0-.616-1.486l-.728.954Zm-1.152-.175c.42.042.7.07.905.107.21.038.252.072.247.068l.728-.954c-.23-.175-.506-.248-.763-.295-.262-.047-.597-.08-.998-.12l-.12 1.194Zm-1.035-.216c.162.084.326.124.486.151.154.026.34.044.549.065l.12-1.194a7.985 7.985 0 0 1-.47-.054.489.489 0 0 1-.135-.034l-.55 1.066Zm-.755-.834c.142.36.41.656.755.834l.55-1.066a.4.4 0 0 1-.189-.209l-1.116.441ZM1.4 12.632c0 .21 0 .396.01.552.01.162.035.33.102.5l1.116-.442a.488.488 0 0 1-.02-.138 7.985 7.985 0 0 1-.008-.472H1.4Zm0-1.264v1.264h1.2v-1.264H1.4Zm.112-1.051c-.067.17-.091.337-.102.499-.01.155-.01.342-.01.552h1.2c0-.226 0-.366.007-.472.007-.1.018-.13.021-.138l-1.116-.441Zm.754-.834a1.6 1.6 0 0 0-.754.834l1.116.44a.4.4 0 0 1 .189-.207l-.55-1.067Zm1.036-.216c-.21.02-.395.039-.549.065-.16.027-.324.067-.487.151l.55 1.066a.489.489 0 0 1 .136-.034 7.9 7.9 0 0 1 .47-.054l-.12-1.194Zm.06-.003v1.2-1.2Zm0 0v1.2-1.2Zm1.092-.172c.005-.004-.036.03-.247.067-.205.037-.485.066-.905.108l.12 1.194c.4-.04.736-.073.998-.12.256-.047.532-.12.762-.295l-.728-.954Zm.154-.371a.4.4 0 0 1-.154.37l.728.955a1.6 1.6 0 0 0 .616-1.485l-1.19.16Zm-.691-.94c.268.328.445.546.564.717.122.175.128.228.127.223l1.19-.16c-.039-.287-.183-.534-.331-.748-.152-.219-.366-.48-.621-.791l-.93.76Zm-.58-.884c.056.173.144.319.238.45.09.128.209.272.342.435l.929-.76a8 8 0 0 1-.294-.37.488.488 0 0 1-.071-.12l-1.143.365Zm.057-1.123a1.6 1.6 0 0 0-.056 1.123l1.143-.365a.4.4 0 0 1 .014-.281l-1.101-.477Zm.664-.823c-.148.148-.28.28-.384.398a1.624 1.624 0 0 0-.28.425l1.1.477a.488.488 0 0 1 .084-.112c.07-.08.169-.18.329-.34l-.849-.848Zm.893-.893-.893.893.849.848.893-.893-.849-.848Zm0 0 .849.848-.849-.848Zm.823-.665a1.624 1.624 0 0 0-.425.281c-.117.103-.25.235-.398.384l.849.848c.16-.16.259-.259.34-.329a.488.488 0 0 1 .111-.083l-.477-1.1Zm1.123-.056a1.6 1.6 0 0 0-1.123.056l.477 1.101a.4.4 0 0 1 .281-.014l.365-1.143Zm.885.58c-.162-.134-.307-.252-.434-.343a1.624 1.624 0 0 0-.45-.237L6.531 4.48a.488.488 0 0 1 .12.072c.087.062.195.15.37.293l.76-.929Zm.939.69c.005.001-.048-.005-.223-.127-.17-.118-.389-.296-.716-.564l-.76.93c.312.254.572.468.791.62.214.148.46.292.747.33l.16-1.189Zm.371-.153a.4.4 0 0 1-.371.153l-.16 1.19a1.6 1.6 0 0 0 1.485-.616l-.954-.727Zm.175-1.152c-.042.42-.07.7-.107.904-.038.21-.072.252-.068.248l.954.727c.176-.23.248-.506.295-.762.047-.262.08-.598.12-.998l-1.194-.12Zm.216-1.035a1.624 1.624 0 0 0-.151.486c-.026.154-.044.34-.065.549l1.194.119a7.98 7.98 0 0 1 .054-.47c.017-.099.03-.127.034-.134l-1.066-.55Zm.834-.755a1.6 1.6 0 0 0-.834.755l1.066.55a.4.4 0 0 1 .209-.189l-.441-1.116Zm1.051-.112c-.21 0-.396 0-.552.01-.162.01-.33.035-.5.102l.442 1.116a.487.487 0 0 1 .138-.02c.106-.008.246-.008.472-.008V1.4Zm1.264 0h-1.264v1.2h1.264V1.4Zm1.051.112a1.624 1.624 0 0 0-.499-.102c-.155-.01-.342-.01-.552-.01v1.2c.226 0 .366 0 .472.007.1.007.13.018.138.021l.441-1.116Zm.834.755a1.6 1.6 0 0 0-.834-.755l-.44 1.116a.4.4 0 0 1 .207.189l1.067-.55ZM15.4 12a3.4 3.4 0 0 1-3.4 3.4v1.2a4.6 4.6 0 0 0 4.6-4.6h-1.2ZM12 8.6a3.4 3.4 0 0 1 3.4 3.4h1.2A4.6 4.6 0 0 0 12 7.4v1.2ZM8.6 12A3.4 3.4 0 0 1 12 8.6V7.4A4.6 4.6 0 0 0 7.4 12h1.2Zm3.4 3.4A3.4 3.4 0 0 1 8.6 12H7.4a4.6 4.6 0 0 0 4.6 4.6v-1.2Z"
    />
  </Svg>
);
export default SettingsIcon;
