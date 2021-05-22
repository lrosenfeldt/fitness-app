import styled from 'styled-components';
import { H1, SectionWrapper } from 'components/base/base';
import TagBox from './tagBox/TagBox';

const StyledSection = styled(SectionWrapper)`
  ${({ theme }) => theme.gradient.yellowToPink};
  height: 75vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
  "."
  "title"
  "tags";
`;

const StyledH1 = styled(H1)`
  text-align: center;
  grid-area: title;
  align-self: center;
`;

const ExitButton = () => {
  return (
  <button />
  )
};

const ProgramHeader = ({ title }) => {
  return (
    <StyledSection>
      <StyledH1>{title || "Titel des Programms"}</StyledH1>
      <TagBox />
    </StyledSection>
  )
};

export default ProgramHeader;