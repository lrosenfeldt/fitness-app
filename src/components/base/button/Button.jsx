import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { P } from "components/base/base";

const Button = styled(P).attrs({
  small: false,
  as: "button",
})`
  background-color: ${({ theme }) => theme.color.navy};
  border-radius: 50px;
  color: white;
  padding: 12px 25px;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.navy};
  border-radius: 50px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  line-height: ${({ theme }) => theme.lineHeight.text};
  padding: 12px 25px;
  text-align: center;
  display: block;
`;

export const LinkButton = ({ children, to }) => {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Button;
