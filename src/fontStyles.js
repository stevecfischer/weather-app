import { createGlobalStyle } from 'styled-components';
import Raleway from './fonts/Raleway/static/Raleway-Regular.ttf';
import RalewayBold from './fonts/Raleway/static/Raleway-Bold.ttf';
// import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Raleway';
  src: url(${Raleway}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Raleway Bold';
  src: url(${RalewayBold}) format('truetype');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

body {
  font-family: 'Raleway', sans-serif;
}
`;

export default FontStyles;
