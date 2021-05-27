// global styles for resetting browser defaults and setting up standards
// variables are found in /src/theme/theme.js
import { createGlobalStyle } from "styled-components";
import MontserratBold from "assets/fonts/Montserrat/Montserrat-Bold.ttf";
import MontserratBoldItalic from "assets/fonts/Montserrat/Montserrat-BoldItalic.ttf";
import MontserratItalic from "assets/fonts/Montserrat/Montserrat-Italic.ttf";
import MontserratRegular from "assets/fonts/Montserrat/Montserrat-Regular.ttf";

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: "Montserrat";
    src: url(${MontserratBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratItalic});
    font-weight: normal;
    font-style: italic, oblique;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratRegular});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratBoldItalic});
    font-weight: bold;
    font-style: italic;
  }

  * {
    border: none;
    box-sizing: border-box;
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

  button {
    background-color: transparent;
  }
`;

export default GlobalStyles;
