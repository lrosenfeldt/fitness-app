import styled from "styled-components";
import PropTypes from "prop-types";
import { cssSizeRe } from "API/regExp/";

const Dot = styled.div`
  background-color: ${(props) => props.color || props.theme.color.beige};
  border-radius: 50%;
  height: ${({ size, theme }) => size || theme.fontSize.small};
  width: ${(size, theme) => size || theme.fontSize.small};
`;

Dot.defaultProps = {
  color: null,
  size: null,
};

Dot.propTypes = {
  color: PropTypes.string,
  size: ({ size }, propName, componentName) => {
    if (cssSizeRe.test(size)) {
      return new Error(
        `Invalid prop \`${size}\` supplied to` +
          ` \`${componentName}\`. Should be number + "em|rem|%|px". Validation failed.`
      );
    }
    return null;
  },
};

export default Dot;
