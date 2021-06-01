import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.text};

  ${({ small }) =>
    small &&
    css`
      color: ${({ theme }) => theme.color.navy};
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: ${({ theme }) => theme.lineHeight.small};
    `}
`;

const Text = ({ className, children, small }) => {
  return (
    <StyledP className={className} small={small}>
      {children}
    </StyledP>
  );
};

Text.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;
