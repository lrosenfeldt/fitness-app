import styled from 'styled-components';
import { P } from 'components/base/base';
import FavButton from 'components/favButton/FavButton';
import WorkoutInfo from 'components/workoutInfo/WorkoutInfo';

const StyledLi = styled.li`
  padding: 15px 18px 10px 14px;
`;

const WorkoutItem = ({ calories, categories, duration, index }) => {
  return (
    <StyledLi>
      <P>{"Tag " + index}</P>
      <WorkoutInfo
        calories={calories}
        categories={categories}
        duration={duration}
      />
      <FavButton />
    </StyledLi>
  )
};

export default WorkoutItem;