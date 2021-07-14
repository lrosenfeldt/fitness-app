import styled from "styled-components";
import PropTypes from "prop-types";
import H2 from "@atoms/h2";
import Img from "@atoms/img";
import Text from "@atoms/text";
import WorkoutParameterLabel from "@atoms/workoutParameterLabel";

const HeadingWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const StyledImg = styled(Img)`
  margin-bottom: 11px;
`;

const DailyWorkoutPreview = ({ workout }) => {
  return (
    <div>
      <HeadingWrapper>
        <H2>Dein Workout heute</H2>
        <Text small>Trainingsplan</Text>
      </HeadingWrapper>
      <StyledImg
        src={workout.image.asset.url}
        alt={workout.image.asset.altText}
      />
      <Text>{workout.title}</Text>
      <Text>Titel des Programms</Text>
      <WorkoutParameterLabel
        calories={workout.calories}
        categories={workout.categories}
        duration={workout.duration}
      />
    </div>
  );
};

DailyWorkoutPreview.propTypes = {
  workout: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    categories: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    duration: PropTypes.number,
    image: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
      }),
    }),
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default DailyWorkoutPreview;
