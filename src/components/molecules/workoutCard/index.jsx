import styled from "styled-components";
import PropTypes from "prop-types";
import H2 from "components/atoms/h2";

const Wrapper = styled.div`
  display: grid;
`;

const WorkoutCard = ({ title, isFav, isHighlight, isNew }) => {};

WorkoutCard.defaultProps = {
  isFav: false,
  isHighlight: false,
  isNew: false,
};

WorkoutCard.propTypes = {
  title: PropTypes.string.isRequired,
  isFav: PropTypes.bool,
  isHighlight: PropTypes.bool,
  isNew: PropTypes.bool,
};

export default WorkoutCard;
