import styled from "styled-components";
import PropTypes from "prop-types";

export const H3 = styled.h3`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.h3};
`;

H3.propTypes = {
  children: PropTypes.string.isRequired,
};

export default H3;
