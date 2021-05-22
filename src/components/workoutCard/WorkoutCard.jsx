import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { H2, P } from 'components/base/base';
// import FavButton from './favButton/FavButton';
import FavButton from './favButton/FavButton';


const StyledDiv = styled.div`
  background-color: ${(props) => {
    if (props.highlighted) {
      return props.theme.color.lightBlue;
    }
    return props.theme.color.beige;
  }};
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    "fav newTag"
    "title title";
  grid-template-rows: 20px 1fr;
  margin-bottom: 20px;
  height: 215px;
  padding: 12px 15px 0 15px;
`;

const StyledNavLink = styled(NavLink)`
  align-items: center;
  align-self: stretch;
  display: flex;
  grid-area: title;
  justify-content: center;
  justify-self: stretch;
`;

const StyledP = styled(P).attrs({
  small: true,
})`
  align-self: center;
  justify-self: end;
  grid-area: newTag;
`;

const WorkoutCard = ({ highlighted, id, isFav, isNew, title}) => {
  return (
    <StyledDiv highlighted={highlighted}>
      <FavButton isFav={isFav}/>
      {isNew && <StyledP>Neu</StyledP>}
      <StyledNavLink to={`program/${id}`}>
        <H2>{title}</H2>
      </StyledNavLink>
    </StyledDiv>
  )
};

export default WorkoutCard;