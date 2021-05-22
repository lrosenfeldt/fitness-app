import { useQuery } from '@apollo/client';
import { P } from 'components/base/base';
import Spinner from 'components/base/spinner/Spinner';
import WorkoutPreviewCard from './workoutPreviewCard/WorkoutPreviewCard';
import translateWorkoutCategories from 'API/translateWorkoutCategories';
import { GET_WORKOUT_BY_ID } from 'API/queries/index';


const DailyWorkoutPreview = ({ id }) => {
  const { loading, error, data } = useQuery(GET_WORKOUT_BY_ID, { variables: {
    id: id,
  }});

  if (loading) return <Spinner />
  if (error) return <P>Fehler! Workout nicht gefunden!</P>

  return (
    <WorkoutPreviewCard
      imageSource={data.Workout.image && data.Workout.image.asset.url}
      title={data.Workout.title}
      calories={data.Workout.calories}
      duration={data.Workout.duration}
      categories={data.Workout.categories && translateWorkoutCategories(data.Workout.categories)}
    />
  )
}

export default DailyWorkoutPreview;