import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import useState from "react";
import heartIcon from "assets/images/icon_fav.svg";
import filledHeartIcon from "assets/images/icon_fav-filled.svg";

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
        animation: ${({ theme }) => theme.animation.pulse} 1s ease-in-out;
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
