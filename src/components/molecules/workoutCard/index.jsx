import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import WorkoutParameterLabel from "@atoms/workoutParameterLabel";
import FavButton from "@atoms/favButton";
import Text from "@atoms/text";

const StyledLi = styled.li`
  background-color: white;
  border-radius: 5px;
  padding: 15px 18px 10px 14px;
`;

const NavLinkWrapper = styled(NavLink)`
  display: block;
  padding-bottom: 30px;
`;

const WorkoutCard = ({ className, WorkoutWithDay }) => {
  const { Workout, day } = WorkoutWithDay;
  return (
    <StyledLi className={className}>
      <NavLinkWrapper to="/program/day1/1">
        <Text>Tag {day}</Text>
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
  WorkoutWithDay: PropTypes.shape({
    day: PropTypes.number,
    Workout: PropTypes.shape({
      calories: PropTypes.number,
      categories: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
      day: PropTypes.number,
      duration: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default WorkoutCard;
