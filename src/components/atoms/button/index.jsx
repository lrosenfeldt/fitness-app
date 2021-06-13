import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.navy};
  border-radius: 50px;
  color: white;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  line-height: ${({ theme }) => theme.lineHeight.text};
  padding: 12px 25px;
  text-align: center;
`;

const StyledButton = styled(StyledNavLink).attrs({
  as: "button",
})`
  display: block;
`;

const Button = ({ children, className, onClickHandler, to, buttonType }) => {
  if (buttonType === "button") {
    return (
      <StyledButton className={className} onClick={onClickHandler}>
        {children}
      </StyledButton>
    );
  }
  if (buttonType === "link") {
    return (
      <StyledNavLink className={className} to={to}>
        {children}
      </StyledNavLink>
    );
  }
  return null;
};

Button.propTypes = {
  className: PropTypes.string,
  buttonType: PropTypes.oneOf(["button", "link"]).isRequired,
  onClickHandler: ({ onClickHandler, buttonType }, propName, componentName) => {
    if (buttonType === "link" && onClickHandler) {
      return new Error(
        `\`onClickHandler\` prop passed to \`${componentName}\` but buttonType \`link\` specified. Validation failed.`
      );
    }
    if (buttonType === "button") {
      return PropTypes.checkPropTypes(
        { onClickHandler: PropTypes.func.isRequired },
        { onClickHandler },
        "onClickHandler",
        componentName
      );
    }
    return null;
  },
  to: ({ to, buttonType }, propName, componentName) => {
    if (buttonType === "button" && to) {
      return new Error(
        `\`to\` prop passed to \`${componentName}\` but buttonType \`button\` specified. Validation failed.`
      );
    }
    if (buttonType === "to") {
      return PropTypes.checkPropTypes(
        { to: PropTypes.string.isRequired },
        { to },
        "to",
        componentName
      );
    }
    return null;
  },
  children: PropTypes.string.isRequired,
};

export default Button;
