import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import backArrowIcon from "@assets/images/icon_back_arrow.png";
import xIcon from "@assets/images/icon_x_close.png";

const StyledButton = styled.button.attrs({ type: "button" })`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${({ buttonType }) => {
    if (buttonType === "arrow") {
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

const ExitButton = ({ className, buttonType = null }) => {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <StyledButton
      className={className}
      buttonType={buttonType}
      onClick={goBackHandler}
    />
  );
};

ExitButton.propTypes = {
  className: PropTypes.string,
  buttonType: PropTypes.string,
};

export default ExitButton;
