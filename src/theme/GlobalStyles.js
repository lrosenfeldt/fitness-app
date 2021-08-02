// global styles for resetting browser defaults and setting up standards
// variables are found in /src/theme/theme.js
import { createGlobalStyle } from "styled-components";
import MontserratBold from "@assets/fonts/Montserrat/Montserrat-Bold.ttf";
import MontserratBoldItalic from "@assets/fonts/Montserrat/Montserrat-BoldItalic.ttf";
import MontserratItalic from "@assets/fonts/Montserrat/Montserrat-Italic.ttf";
import MontserratRegular from "@assets/fonts/Montserrat/Montserrat-Regular.ttf";

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

  ul {
    list-style: none;
  }
  
  #root {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    max-width: 414px;
    display: grid;
    align-content: space-between;
    align-items: start;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    justify-content: center;
    overflow: hidden;

    @media screen and (min-width: 415px) {
      border-radius: 5px;
      box-shadow: 2px 3px 15px 8px rgba(0, 0, 0, 0.2);
      height: 736px;
      margin: auto;
      margin-top: 2rem;
      min-height: auto;
    }
  }
`;

export default GlobalStyles;
