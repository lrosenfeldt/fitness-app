import styled from "styled-components";
import { P, Img } from "components/base/base";
import WorkoutInfo from "components/workoutInfo/WorkoutInfo";
import PreviewHeader from "../previewHeader/PreviewHeader";

const StyledImg = styled(Img)`
  margin: 10px 0;
`;

const WorkoutPreviewCard = ({
  calories,
  categories,
  duration,
  imageSource,
  programTitle,
  title,
}) => {
  return (
    <div>
      <PreviewHeader />
      {imageSource && <StyledImg src={imageSource} />}
      <P>{title || "Titel des Workouts"}</P>
      <P>{programTitle || "Titel des Programms"}</P>
      <WorkoutInfo
        calories={calories}
        categories={categories}
        duration={duration}
      />
    </div>
  );
};

export default WorkoutPreviewCard;
