import styled from 'styled-components';
import Tag from './Tag';

const StyledDiv = styled.div`
  align-items: center;
  align-self: end;
  display: flex;
  grid-area: tags;
  justify-content: space-around;
  padding-bottom: 21px;
`;

const TagBox = (props) => {
  const dummyData = [
    "Abnehmen", "leicht", "6 Wochen"
  ];
  return (
    <StyledDiv>
      {
        dummyData.map((tag) => <Tag>{tag}</Tag>)
      }
    </StyledDiv>
  )
}

export default TagBox;