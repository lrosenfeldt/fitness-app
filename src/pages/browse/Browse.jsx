import styled from 'styled-components';
import { H2, P, SectionWrapper } from 'components/base/base';
import WorkoutCard from 'components/workoutCard/WorkoutCard';

const StyledH2 = styled(H2)`
  margin-top: 71px;
  margin-bottom: 25px;
`;

const StyledButton = styled(P).attrs({
  small: true,
})`
  background-color: transparent;
  margin-bottom: 27px;
`;

const Browse = (props) => {
  return (
    <SectionWrapper>
      <StyledH2 lang="en">Browse</StyledH2>
      <StyledButton as="button">Filter</StyledButton>
      <WorkoutCard isNew isFav={false}>Titel des Workouts</WorkoutCard>
      <WorkoutCard isNew isFav={false} highlighted>Titel des Workouts</WorkoutCard>
      <WorkoutCard isNew isFav={false}>Titel des Workouts</WorkoutCard>
      <WorkoutCard isNew isFav={false}>Titel des Workouts</WorkoutCard>
    </SectionWrapper> 
  )
};

export default Browse;