import styled from "styled-components";
import PropTypes from "prop-types";
import Dot from "components/atoms/dot";
import ExitButton from "components/atoms/exitButton";
import H1 from "components/atoms/h1";
import Text from "components/atoms/text";
import * as translate from "API/translateTags";

const HeaderWrapper = styled.div`
  align-items: space-between;
  height: 75vh;
  display: grid;
  justify-items: center;
  ${({ theme }) => theme.gradient.yellowToPink};
  justify-items: center;
  grid-template-areas:
    ". . exitButton"
    "title title title"
    "tag1 tag2 tag3";
`;

const StyledH1 = styled(H1)`
  grid-area: title;
`;

const StyledExitButton = styled(ExitButton)`
  grid-area: exitButton;
`;

const TagBox = styled.div`
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
        <Text>{translate.programFocus(focus)}</Text>
      </TagBox>
      <TagBox gridArea="tag2">
        <Dot size="25px" />
        <Text>{translate.programDifficulty(difficulty)}</Text>
      </TagBox>
      <TagBox gridArea="tag3">
        <Dot size="25px" />
        <Text>{`${duration} Wochen`}</Text>
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
