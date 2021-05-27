import styled, { css, keyframes } from "styled-components";
import PropTypes from "prop-types";
import useState from "react";
import heartIcon from "assets/images/icon_fav.svg";
import filledHeartIcon from "assets/images/icon_fav-filled.svg";

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
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 14px;
  width: 16px;
  ${({ filled }) => {
    if (filled) {
      return css`
        background-image: url(${filledHeartIcon});
        animation: ${pulse} 1s ease-in-out;
      `;
    }
    return css`
      background-image: url(${heartIcon});
    `;
  }}
`;

const FavButton = ({ isFav }) => {
  const [filled, setFilled] = useState(isFav);
  const toggleFilledHandler = () => {
    setFilled(!filled);
  };
  return <StyledButton filled={filled} onClick={toggleFilledHandler} />;
};

FavButton.defaultProps = {
  isFav: false,
};

FavButton.propTypes = {
  isFav: PropTypes.bool,
};

export default FavButton;
