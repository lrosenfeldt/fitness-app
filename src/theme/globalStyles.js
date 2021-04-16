// global styles for resetting browser defaults and setting up standards
// variables are found in /src/theme/theme.js
import { createGlobalStyle } from  'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    border: none;
    margin: 0;
    outline: none;
    padding: 0;
    text-decoration: none;
  }

  body {
    font-family: Montserrat;
  }

  img {
    display: block;
  }
`;

export default GlobalStyles;