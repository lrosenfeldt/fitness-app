// global styles for resetting browser defaults and setting up standards
// variables are found in /src/theme/theme.js
import { createGlobalStyle } from  'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    border: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;