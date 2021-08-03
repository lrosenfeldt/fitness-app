// global styles for resetting browser defaults and setting up standards
// variables are found in /src/theme/theme.js
import { createGlobalStyle } from "styled-components";
import MontserratBold from "@assets/fonts/Montserrat/Montserrat-Bold.ttf";
import MontserratBoldItalic from "@assets/fonts/Montserrat/Montserrat-BoldItalic.ttf";
import MontserratItalic from "@assets/fonts/Montserrat/Montserrat-Italic.ttf";
import MontserratRegular from "@assets/fonts/Montserrat/Montserrat-Regular.ttf";

const mobileBreakpoint = "415px";

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
    @media screen and (min-width: ${mobileBreakpoint}) {
      background-image: linear-gradient(to top, rgb(229, 93, 135), rgb(95, 195, 228));
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 2rem;
    }
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
    align-content: space-between;
    align-items: start;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    justify-content: center;
    max-width: 414px;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100vw;

    @media screen and (min-width: ${mobileBreakpoint}) {
      border-radius: 15px;
      box-shadow: 2px 3px 15px 8px rgba(0, 0, 0, 0.2);
      height: 736px;
      min-height: auto;
    }
  }
`;

export default GlobalStyles;
