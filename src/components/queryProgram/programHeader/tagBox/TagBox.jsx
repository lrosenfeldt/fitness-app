import translateProgramDifficulty from "API/translateProgramDifficulty";
import translateProgramFocus from "API/translateProgramFocus";
import styled from "styled-components";
import Tag from "./tag/Tag";

const StyledDiv = styled.div`
  align-items: center;
  align-self: end;
  display: flex;
  grid-area: tags;
  justify-content: space-around;
  padding-bottom: 21px;
`;

const TagBox = ({ difficulty, duration, focus }) => {
  return (
    <StyledDiv>
      <Tag>{translateProgramFocus(focus)}</Tag>
      <Tag>{translateProgramDifficulty(difficulty)}</Tag>
      <Tag>{`${duration} Wochen`}</Tag>
    </StyledDiv>
  );
};

export default TagBox;
