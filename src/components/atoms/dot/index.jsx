import styled from "styled-components";
import PropTypes from "prop-types";
import { cssSizeRe } from "@utils/regExp/";

const Dot = styled.div`
  background-color: ${({ bgColor, theme }) => bgColor || theme.color.beige};
  border-radius: 50%;
  height: ${({ size, theme }) => size || theme.fontSize.small};
  width: ${({ size, theme }) => size || theme.fontSize.small};
`;

Dot.propTypes = {
  bgColor: PropTypes.string,
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
