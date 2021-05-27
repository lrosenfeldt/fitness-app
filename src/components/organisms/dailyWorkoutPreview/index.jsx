import styled from "styled-components";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "API/queries";
import H2 from "components/atoms/h2";
import Img from "components/atoms/img";
import Text from "components/atoms/text";
import Spinner from "components/atoms/spinner";
import WorkoutParameterLabel from "components/molecules/workoutParameterLabel";

const HeadingWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const StyledImg = styled(Img)`
  margin-bottom: 11px;
`;

const DailyWorkoutPreview = ({ id }) => {
  const { loading, error, data } = useQuery(GET_WORKOUT_BY_ID, {
    variables: {
      id,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <Text>Da ist wohl etwas schiefgelaufen...</Text>;

  return (
    <div>
      <HeadingWrapper>
        <H2>Dein Workout heute</H2>
        <Text small>Trainingsplan</Text>
      </HeadingWrapper>
      <StyledImg
        src={data.Workout.image.asset.url}
        alt={data.Workout.image.asset.altText}
      />
      <Text>{data.Workout.title}</Text>
      <Text>Titel des Programms</Text>
      <WorkoutParameterLabel
        calories={data.Workout.calories}
        categories={data.Workout.categories}
        duration={data.Workout.duration}
      />
    </div>
  );
};

DailyWorkoutPreview.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DailyWorkoutPreview;
