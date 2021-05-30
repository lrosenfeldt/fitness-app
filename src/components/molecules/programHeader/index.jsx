import styled from "styled-components";
import PropTypes from "prop-types";
import Dot from "components/atoms/dot";
import ExitButton from "components/atoms/exitButton";
import H1 from "components/atoms/h1";
import NavLink from "components/atoms/navLink";
import * as translate from "API/translateTags";

const HeaderWrapper = styled.section`
  height: 75vh;
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
  as: "p",
})`
  align-self: end;
  align-items: end;
  display: grid;
  justify-items: center;
  row-gap: 4px;
  grid-area: ${({ gridArea }) => gridArea};
`;

const ProgramHeader = ({ difficulty, duration, focus, title }) => {
  return (
    <HeaderWrapper>
      <StyledExitButton />
      <StyledH1>{title}</StyledH1>
      <TagBox gridArea="tag1">
        <Dot size="25px" />
        {translate.programFocus(focus)}
      </TagBox>
      <TagBox gridArea="tag2">
        <Dot size="25px" />
        {translate.programDifficulty(difficulty)}
      </TagBox>
      <TagBox gridArea="tag3">
        <Dot size="25px" />
        {`${duration} Wochen`}
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
