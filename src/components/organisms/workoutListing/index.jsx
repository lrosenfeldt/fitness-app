import styled from "styled-components";
import PropTypes from "prop-types";
import H3 from "@atoms/h3";
import WorkoutCard from "@molecules/workoutCard";

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.beige};
  padding-bottom: 20px;
  padding-left: ${({ theme }) => theme.contentPadding};
  padding-right: ${({ theme }) => theme.contentPadding};
  padding-top: 35px;
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  padding-top: 25px;
  row-gap: 14px;
`;

const WorkoutListing = ({ className, workouts }) => {
  return (
    <SectionWrapper className={className}>
      <H3>{`${workouts.length} Tage`}</H3>
      <StyledUl>
        {workouts.map((workoutWithDay) => (
          <WorkoutCard
            WorkoutWithDay={workoutWithDay}
            key={workoutWithDay.day}
            id={workoutWithDay.Workout._id}
          />
        ))}
      </StyledUl>
    </SectionWrapper>
  );
};

WorkoutListing.propTypes = {
  className: PropTypes.string,
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
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
