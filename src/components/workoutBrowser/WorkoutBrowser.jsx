import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_ALL_PROGRAMS } from 'queries/index';
import WorkoutCard from 'components/workoutCard/WorkoutCard';


const WorkoutBrowser = (props) => {
  return (
    <div>
      <WorkoutCard isNew isFav={false}>Titel des Workouts</WorkoutCard>
      <WorkoutCard isNew isFav={false} highlighted>Titel des Workouts</WorkoutCard>
      <WorkoutCard isNew isFav={false}>Titel des Workouts</WorkoutCard>
      <WorkoutCard isNew isFav={false}>Titel des Workouts</WorkoutCard>
    </div>
  )
};

export default WorkoutBrowser;