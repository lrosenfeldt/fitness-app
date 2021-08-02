import styled from "styled-components";
import PropTypes from "prop-types";
import Dot from "@atoms/dot";
import ExitButton from "@atoms/exitButton";
import H1 from "@atoms/h1";
import NavLink from "@atoms/navLink";
import * as translate from "@utils/translateTags";

const HeaderWrapper = styled.section`
  height: 75vh;

  @media screen and (min-width: 415px) {
    height: ${({ theme }) => `calc(75% + ${theme.navHeight})`};
  }

  display: grid;
  justify-items: center;
  ${({ theme }) => theme.gradient.yellowToPink};
  padding: 25px ${({ theme }) => theme.contentPadding};
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    ". . exitButton"
    "title title title"
    "tag1 tag2 tag3";
`;

const StyledH1 = styled(H1)`
  align-self: center;
  grid-area: title;
  text-align: center;
`;

const StyledExitButton = styled(ExitButton)`
  grid-area: exitButton;
  align-self: start;
  justify-self: end;
`;

const TagBox = styled(NavLink).attrs({
  as: "div",
})`
  align-self: end;
  align-items: end;
  display: grid;
  justify-items: center;
  row-gap: 4px;
  grid-area: ${({ gridArea }) => gridArea};
`;

const TagText = styled(NavLink).attrs({
  as: "p",
})``;

const ProgramHeader = ({ difficulty, duration, focus, title }) => {
  return (
    <HeaderWrapper>
      <StyledExitButton />
      <StyledH1>{title}</StyledH1>
      <TagBox gridArea="tag1">
        <Dot size="25px" />
        <TagText>{translate.programFocus(focus)}</TagText>
      </TagBox>
      <TagBox gridArea="tag2">
        <Dot size="25px" />
        <TagText>{translate.programDifficulty(difficulty)}</TagText>
      </TagBox>
      <TagBox gridArea="tag3">
        <Dot size="25px" />
        <TagText>{`${duration} Wochen`}</TagText>
      </TagBox>
    </HeaderWrapper>
  );
};

ProgramHeader.propTypes = {
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  focus: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProgramHeader;
