import styled from 'styled-components';
import previewImage from 'images/workout_preview.svg'

const StyledFigure = styled.figure`
  margin: 10px 0;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledFigcaption = styled.figcaption`
  ${({ theme }) => theme.text};

  &:after {
    content: "XXX kcal · 26 Min. · Beweglichkeit";
    ${({ theme }) => theme.smallText};
  }
`;


const WorkoutPreview = (props) => {
  return (
    <StyledFigure>
      <StyledImg src={previewImage}/>
      <StyledFigcaption>
        Titel des Workouts<br/>
        Titel des Programms<br/>
      </StyledFigcaption>
    </StyledFigure>
  );
};

export default WorkoutPreview;