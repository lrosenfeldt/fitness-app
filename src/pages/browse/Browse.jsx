import styled from "styled-components";
import { H2, P, SectionWrapper } from "components/base/base";
import ProgramBrowser from "components/programBrowser/ProgramBrowser";

const StyledH2 = styled(H2)`
  margin-top: 71px;
  margin-bottom: 25px;
`;

const StyledButton = styled(P).attrs({
  small: true,
})`
  background-color: transparent;
  margin-bottom: 27px;
`;

const Browse = () => {
  return (
    <SectionWrapper>
      <StyledH2 lang="en">Browse</StyledH2>
      <StyledButton as="button">Filter</StyledButton>
      <ProgramBrowser />
    </SectionWrapper>
  );
};

export default Browse;
