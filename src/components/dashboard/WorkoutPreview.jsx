import styled from 'styled-components';
import previewImage from 'assets/images/workout_preview.svg'
import { P, Img } from 'components/base/base';
import PreviewHeader from 'components/dashboard/PreviewHeader';

const StyledFigure = styled.figure`
  margin: 10px 0;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledFigcaption = styled(P)`
  &:after {
    content: "XXX kcal · 26 Min. · Beweglichkeit";
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;


const WorkoutPreview = (props) => {
  return (
    <div>
      <PreviewHeader />
      <StyledFigure>
        <Img src={previewImage}></Img>
        <StyledFigcaption as="figcaption">
          {props.title || "Titel des Workouts"}<br />
          {props.programTitle || "Titel des Programms"}<br />
        </StyledFigcaption>
      </StyledFigure>
    </div>
  );
};

export default WorkoutPreview;