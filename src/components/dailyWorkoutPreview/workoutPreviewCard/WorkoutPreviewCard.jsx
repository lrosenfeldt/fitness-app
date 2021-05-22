import styled from 'styled-components';
import { P, Img } from 'components/base/base';
import PreviewHeader from '../previewHeader/PreviewHeader';
import WorkoutInfo from 'components/workoutInfo/WorkoutInfo';


const StyledImg = styled(Img)`
  margin: 10px 0;
`;



const WorkoutPreviewCard = (props) => {
  return (
    <div>
      <PreviewHeader />
      {props.imageSource && <StyledImg src={props.imageSource} />}
      <P>{props.title || "Titel des Workouts"}</P>
      <P>{props.programTitle || "Titel des Programms"}</P>
      <WorkoutInfo
        calories={props.calories}
        categories={props.categories}
        duration={props.duration}
      />
    </div>
  );
};

export default WorkoutPreviewCard;