import { css, keyframes } from "styled-components";

const Theme = {
  animation: {
    pulse: keyframes`
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.2);
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(0.8);
      }
      100% {
        transform: scale(1.0);
      }
    `;
  },

  color: {
    beige: "#F5EBDD",
    green: "#D2DDD0",
    lightBlue: "#3EC1F3",
    pink: "#FFB7D5",
    navy: "#1D2A73",
  },

  fontSize: {
    h1: "36px",
    h2: "24px",
    h3: "18px",
    text: "16px",
    small: "12px",
    navLink: "10px",
  },

  fontWeight: {
    bold: "700",
    normal: "400",
  },

  gradient: {
    yellowToPink: css`
      background: linear-gradient(
          261.83deg,
          #ffb7d5 22.27%,
          rgba(255, 255, 255, 0) 89.6%
        ),
        #ffbe21;
    `,
  },

  letterSpacing: {
    navLink: "0.2em",
  },

  lineHeight: {
    h1: "43.88px",
    h2: "29.26px",
    h3: "21.94px",
    text: "21px",
    textSmall: "15px",
    navLink: "12.19px",
  },

  navHeight: "50px",
  pageMargin: "17px",
};

export default Theme;
