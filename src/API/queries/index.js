import { gql } from '@apollo/client';

export const GET_WORKOUT_BY_ID = gql`
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

export const GET_ALL_PROGRAMS = gql`
query allProgram($preview: Boolean = false) {
  allProgram {
    _id
    title
    workouts @skip(if: $preview) {
      day
      Workout {
        _id
        calories
        categories
        duration
      }
    }
  }
}
`;