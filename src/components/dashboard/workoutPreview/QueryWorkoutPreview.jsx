import { useQuery, gql } from '@apollo/client';
import { P } from 'components/base/base';
import Spinner from 'components/base/spinner/Spinner';
import WorkoutPreview from './WorkoutPreview';

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
}

const translateCategories = (categories) => {
  const translatedArray = categories.map((key) => {
    return category[key];
  })
  if (translatedArray.length > 1) {
    return translatedArray.join(", ");
  }
  return translatedArray[0];
}


const QueryWorkoutPreview = (props) => {
  const { loading, error, data } = useQuery(GET_WORKOUT_BY_ID, { variables: {
    id: "1a985d3f-73d5-414c-abac-bee46d5a6a32"
  }});

  if (loading) return <Spinner />
  if (error) return <P>Fehler! Workout nicht gefunden!</P>

  return (
    <WorkoutPreview
      imageSource={data.Workout.image.asset.url}
      title={data.Workout.title}
      calories={data.Workout.calories}
      duration={data.Workout.duration}
      categories={translateCategories(data.Workout.categories)}
    />
  )
}

export default QueryWorkoutPreview;