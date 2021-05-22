import { SectionWrapper } from "components/base/base";
import styled from "styled-components";
import WorkoutItem from "./workoutItem/WorkoutItem";

const StyledOl = styled(SectionWrapper).attrs({
  as: "ol"
})`
  background-color: ${({ theme }) => theme.color.beige};
  display: grid;
  list-style: none;
  padding-top: 25px;
  row-gap: 14px;
`;

const WorkoutListing = ({ workouts }) => {
  return (
    <StyledOl>
      {
        workouts.map(({ Workout }, index) => (
          <WorkoutItem
            calories={Workout.calories}
            categories={Workout.categories}
            duration={Workout.duration}
            index={index}
            key={Workout._id}
          />
        ))
      }
    </StyledOl>
  )
};

export default WorkoutListing;