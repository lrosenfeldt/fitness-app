import styled from 'styled-components';
import { P, Img } from 'components/base/base';
import PreviewHeader from './PreviewHeader';


const StyledImg = styled(Img)`
  margin: 10px 0;
`;


const WorkoutPreview = (props) => {
  return (
    <div>
      <PreviewHeader />
      <StyledImg src={props.imageSource} />
      <P>{props.title || "Titel des Workouts"}</P>
      <P>{props.programTitle || "Titel des Programms"}</P>
      <P small>
        {props.calories || "XXX"} kcal · {props.duration || "-" } Min. · {props.categories || "-"}
      </P>
    </div>
  );
};

export default WorkoutPreview;