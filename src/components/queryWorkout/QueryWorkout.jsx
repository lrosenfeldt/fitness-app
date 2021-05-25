import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "API/queries/index";
import ExitButton from "components/base/exitButton/ExitButton";
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

<<<<<<< HEAD
const HeadingWrapper = styled.div`
  justify-items: center;
  grid-area: heading;
  grid-template-areas: ". title exit";
  margin-top: 23px;
`;

const StyledP = styled(P).attrs({
  small: true,
})`
  grid-area: title;
`;

const StyledExitButton = styled(ExitButton)`
  justify-self: end;
  grid-area: exit;
`;
=======

const HeadingWrapper = styled.div`
  grid-area: heading;
  grid-grid-template-areas: ". title button";
`;

>>>>>>> origin/main

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
<<<<<<< HEAD
      <HeadingWrapper>
        <StyledP>{data.Workout.title}</StyledP>
        <StyledExitButton to="/browse" />
      </HeadingWrapper>
=======
>>>>>>> origin/main
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
