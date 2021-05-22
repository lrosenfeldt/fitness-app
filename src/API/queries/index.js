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
query {
  allProgram {
    _id
    _createdAt
    title
  }
}
`;

export const GET_PROGRAM_BY_ID = gql`
query($id: ID!) {
  Program(id: $id) {
    description
    difficulty
    duration
    focus
    workouts {
      Workout {
        calories
        categories
        duration
      }
    }
  }
}
`;