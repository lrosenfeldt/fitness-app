import { useQuery, gql } from '@apollo/client';
import { P } from 'components/base/base';
import Spinner from 'components/base/spinner/Spinner';
import WorkoutPreviewCard from './workoutPreviewCard/WorkoutPreviewCard';

const GET_WORKOUT_BY_ID = gql`
  query($id: ID!) {
      Workout(id: $id) {
        title
        calories
        duration
        categories
        image {
          asset {
            url
            altText
          }
        }
      }
  }
`;


const category = {
  strength: "Kraft",
};

const translateCategories = (categories) => {
  const translatedArray = categories.map((key) => {
    return category[key];
  })
  if (translatedArray.length > 1) {
    return translatedArray.join(", ");
  }
  return translatedArray[0];
}


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
      categories={data.Workout.categories && translateCategories(data.Workout.categories)}
    />
  )
}

export default DailyWorkoutPreview;