import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "API/queries/index";
import { NavLink } from "react-router-dom";
import { H1, P, SectionWrapper } from "components/base/base";
import Spinner from "components/base/spinner/Spinner";
import WorkoutInfo from "components/workoutInfo/WorkoutInfo";

const Wrapper = styled(SectionWrapper)`
  ${({ theme }) => theme.gradient.yellowToPink};
  height: 100vh;
  display: grid;
  grid-template-areas:
    "heading"
    "title"
    "button";
`;

const TitleWrapper = styled.div`
  align-self: center;
  grid-area: title;
  text-align: center;
`;

const HeadingWrapper = styled.div`
  grid-area: heading;
  grid-grid-template-areas: ". title button";
`;

const QueryWorkout = ({ id }) => {
  const { loading, error, data } = useQuery(GET_WORKOUT_BY_ID, {
    variables: {
      id,
      noImage: true,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <P>Da ist wohl etwas schiefgelaufen...</P>;

  console.log(data);

  return (
    <Wrapper>
      <TitleWrapper>
        <H1>Tag X</H1>
        <WorkoutInfo
          calories={data.Workout.calories}
          categories={data.Workout.categories}
          duration={data.Workout.duration}
        />
      </TitleWrapper>
    </Wrapper>
  );
};

export default QueryWorkout;
