import styled from "styled-components";
import PropTypes from "prop-types";
import { cssSizeRe } from "API/regExp/";

const Dot = styled.div`
  background-color: ${({ color, theme }) => color || theme.color.beige};
  border-radius: 50%;
  height: ${({ size, theme }) => size || theme.fontSize.small};
  width: ${({ size, theme }) => size || theme.fontSize.small};
`;

Dot.defaultProps = {
  color: null,
  size: null,
};

Dot.propTypes = {
  color: PropTypes.string,
  size: ({ size }) => {
    if (!size) {
      return null;
    }
    if (!cssSizeRe.test(size)) {
      return new Error(
        `Invalid prop \`${size}\` supplied to` +
          ` \`Dot\`. Should be number + "em|rem|%|px". Validation failed.`
      );
    }
    return null;
  },
};

export default Dot;
