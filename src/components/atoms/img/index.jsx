import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  height: ${(props) => (props.portrait ? "100%" : "auto")};
  width: ${(props) => (props.portrait ? "auto" : "100%")};
`;

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  portrait: PropTypes.bool,
};

export default Img;
