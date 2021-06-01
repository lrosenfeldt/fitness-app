import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import H2 from "components/atoms/h2";
import FavButton from "components/atoms/favButton";
import Text from "components/atoms/text";

const Wrapper = styled.div`
  border-radius: 5px;
  display: grid;
  grid-template-rows: 20px 1fr;
  justify-items: end;
  grid-template-areas:
    "fav newTag"
    "title title";
  height: 215px;
  padding: 12px 15px 0 15px;
  background-color: ${({ isHighlight, theme }) =>
    (isHighlight && theme.color.lightBlue) || theme.color.beige};
  // accesibilty concerns regarding VoiceOver
  // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#accessibility_concerns
  &::before {
    content: "\200B";
  }
`;

const NavLinkWrapper = styled(NavLink)`
  align-items: center;
  align-self: stretch;
  display: flex;
  grid-area: title;
  justify-content: center;
  justify-self: stretch;
`;

NavLinkWrapper.propTypes = {
  to: PropTypes.string.isRequired,
};

const StyledFavButton = styled(FavButton)`
  grid-area: fav;
  justify-self: start;
`;

const NewTag = styled(Text).attrs({
  children: "Neu",
})`
  grid-area: newTag;
  display: block;
`;

const ProgramCard = ({ id, isFav, isNew, isHighlight, title }) => {
  return (
    <Wrapper isHighlight={isHighlight} key={id}>
      <StyledFavButton isFav={isFav} />
      {isNew && <NewTag />}
      <NavLinkWrapper to={`/program/${id}`}>
        <H2>{title}</H2>
      </NavLinkWrapper>
    </Wrapper>
  );
};

ProgramCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isFav: PropTypes.bool,
  isNew: PropTypes.bool,
  isHighlight: PropTypes.bool,
};

export default ProgramCard;
