import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import favIcon from "assets/images/icon_fav.svg";
import favIconFilled from "assets/images/icon_fav-filled.svg";

const pulse = keyframes`
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

const StyledButton = styled.button`
  ${({ filled }) => {
    if (filled) {
      return css`
        background-image: url(${favIconFilled});
        animation: 1s ${pulse} ease-in-out;
      `;
    }
    return css`
      background-image: url(${favIcon});
    `;
  }}
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 20px;
  grid-area: fav;
  height: 20px;
  transition: all 0.15s ease-in-out;
  width: 30px;
`;

const FavButton = ({ isFav }) => {
  const [fav, setFav] = useState(isFav);
  const favHandler = () => {
    setFav(!fav);
  };

  return <StyledButton filled={fav} onClick={favHandler} />;
};

export default FavButton;
