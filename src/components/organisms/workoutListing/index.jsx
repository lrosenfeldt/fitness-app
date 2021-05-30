import styled from "styled-components";
import PropTypes from "prop-types";
import H3 from "components/atoms/h3";
import WorkoutCard from "components/molecules/workoutCard";

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.beige};
  padding-left: ${({ theme }) => theme.contentPadding};
  padding-right: ${({ theme }) => theme.contentPadding};
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  row-gap: 14px;
`;

const WorkoutListing = ({ className, workouts }) => {
  workouts.map((el) => console.log(el.Workout));
  return (
    <SectionWrapper className={className}>
      <H3>{`${workouts.length} Tage`}</H3>
      <StyledUl>
        {workouts.map((workoutWithDay) => (
          <WorkoutCard
            Workout={workoutWithDay.Workout}
            key={workoutWithDay.Workout._id}
            id={workoutWithDay.Workout._id}
          />
        ))}
      </StyledUl>
    </SectionWrapper>
  );
};

WorkoutListing.defaultProps = {
  className: "",
};

WorkoutListing.propTypes = {
  className: PropTypes.string,
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      Workout: PropTypes.shape({
        calories: PropTypes.number,
        categories: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]),
        duration: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default WorkoutListing;
