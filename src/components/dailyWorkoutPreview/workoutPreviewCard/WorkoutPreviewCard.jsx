import styled from 'styled-components';
import { P, Img } from 'components/base/base';
import PreviewHeader from '../previewHeader/PreviewHeader';


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
      <P small>
        {props.calories || "XXX"} kcal · {props.duration ? props.duration + " Min." : "So schnell du kannst!"} · {props.categories}
      </P>
    </div>
  );
};

export default WorkoutPreviewCard;