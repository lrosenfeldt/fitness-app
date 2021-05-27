import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Text = styled.p`
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

Text.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Text;
