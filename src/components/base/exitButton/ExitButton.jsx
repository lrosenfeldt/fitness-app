import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import xIcon from "assets/images/icon_x_close.png";
import backArrowIcon from "assets/images/icon_back_arrow.png";

const ExitButton = styled(NavLink)`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${({ type }) => {
    if (type === "x") {
      return css`
        background-image: url(${xIcon});
        height: 15px;
        width: 15px;
      `;
    }
    if (type === "arrow") {
      return css`
        background-image: url(${backArrowIcon});
        height: 18px;
        width: 18px;
      `;
    }
    return null;
  }}
`;

export default ExitButton;
