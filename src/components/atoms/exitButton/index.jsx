import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import backArrowIcon from "assets/images/icon_back_arrow.png";
import xIcon from "assets/images/icon_x_close.png";

const StyledButton = styled.button`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${({ type }) => {
    if (type === "arrow") {
      return css`
        background-image: url(${backArrowIcon});
        width: 18px;
        height: 18px;
      `;
    }
    return css`
      background-image: url(${xIcon});
      width: 15px;
      height: 15px;
    `;
  }}
`;

const ExitButton = ({ className, type }) => {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <StyledButton className={className} type={type} onClick={goBackHandler} />
  );
};

ExitButton.defaultProps = {
  className: "",
  type: "",
};

ExitButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default ExitButton;
