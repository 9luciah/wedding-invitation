import { createGlobalStyle } from 'styled-components';
import CrimsonPro from '../fonts/CrimsonPro.woff';
import CrimsonProttf from '../fonts/CrimsonPro.ttf';

export const GlobalStyle = createGlobalStyle`

    body {
      @font-face {
          font-family: 'CrimsonPro';
          src: url(${CrimsonPro}) format('woff'),url(${CrimsonProttf}) format('truetype');
          font-weight: normal;
          font-style: normal;
      }



      @font-face {
          font-family: 'GowunDodum';
          font-weight: normal;
          font-style: normal;
          src: url('https://cdn.jsdelivr.net/gh/webfontworld/yangheeryu/GowunDodum.eot');
          src: url('https://cdn.jsdelivr.net/gh/webfontworld/yangheeryu/GowunDodum.woff') format('woff'),
               url('https://cdn.jsdelivr.net/gh/webfontworld/yangheeryu/GowunDodum.ttf') format("truetype");
          font-display: swap;
      }

    font-family: 'GowunDodum';
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
  }
`;
