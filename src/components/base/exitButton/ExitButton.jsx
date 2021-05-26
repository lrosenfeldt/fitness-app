import styled from "styled-components";
import { NavLink } from "react-router-dom";
import xIcon from "assets/images/icon_x_close.png";

const ExitButton = styled(NavLink)`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${xIcon});
  height: 15px;
  width: 15px;
`;

export default ExitButton;
