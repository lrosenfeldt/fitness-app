import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink as UnstyledNavLink } from "react-router-dom";

const NavLink = styled(UnstyledNavLink)`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.navLink};
  font-weight: ${({ theme }) => theme.fontWeight.navLink};
  letter-spacing: ${({ theme }) => theme.letterSpacing.navLink};
  line-height: ${({ theme }) => theme.lineHeight.navLink};
  text-transform: uppercase;
`;

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
