import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import WorkoutParameterLabel from "components/atoms/workoutParameterLabel";
import FavButton from "components/atoms/favButton";
import Text from "components/atoms/text";

const StyledLi = styled.li`
  background-color: white;
  border-radius: 5px;
  padding: 15px 18px 10px 14px;
`;

const NavLinkWrapper = styled(NavLink)`
  display: block;
  padding-bottom: 30px;
`;

const WorkoutCard = ({ className, Workout }) => {
  return (
    <StyledLi className={className}>
      <NavLinkWrapper to="/">
        <Text>Tag 1</Text>
        <WorkoutParameterLabel
          calories={Workout.calories}
          categories={Workout.categories}
          duration={Workout.duration}
        />
      </NavLinkWrapper>
      <FavButton />
    </StyledLi>
  );
};

WorkoutCard.propTypes = {
  className: PropTypes.string,
  Workout: PropTypes.shape({
    calories: PropTypes.number,
    categories: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    duration: PropTypes.number,
  }).isRequired,
};

export default WorkoutCard;
