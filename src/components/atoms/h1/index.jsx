import styled from "styled-components";
import PropTypes from "prop-types";

const H1 = styled.h1`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.h1};
`;

H1.propTypes = {
  children: PropTypes.string.isRequired,
};

export default H1;
