import styled from "styled-components";
import PropTypes from "prop-types";

const H2 = styled.h2`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.h2};
`;

H2.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  lang: PropTypes.oneOf(["de", "en"]),
};

export default H2;
