import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "API/queries/index";
import ArrowButton from "components/base/arrowButton/ArrowButton";
import { LinkButton } from "components/base/button/Button";
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
  display: grid;
  grid-area: heading;
  grid-template-areas: ". center exit";
  justify-items: center;
  margin-top: 23px;
`;

const StyledP = styled(P).attrs({
  small: true,
})`
  grid-area: center;
  justify-self: center;
  text-align: center;
`;

const ArrowButtonWrapper = styled.div`
  grid-area: exit;
  justify-self: end;
`;

const ButtonWrapper = styled.div`
  align-self: center;
  grid-area: button;
  justify-self: center;
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
      <HeadingWrapper>
        <StyledP>{data.Workout.title}</StyledP>
        <ArrowButtonWrapper>
          <ArrowButton />
        </ArrowButtonWrapper>
      </HeadingWrapper>
      <TitleWrapper>
        <H1>Tag X</H1>
        <WorkoutInfo
          calories={data.Workout.calories}
          categories={data.Workout.categories}
          duration={data.Workout.duration}
        />
      </TitleWrapper>
      <ButtonWrapper>
        <LinkButton to="/browse">los!</LinkButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default QueryWorkout;
