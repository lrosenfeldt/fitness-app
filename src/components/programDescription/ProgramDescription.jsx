import styled from "styled-components";
import { P, SectionWrapper } from "components/base/base";
import { LinkButton } from "components/base/button/Button";

const StyledSection = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.color.beige};
  padding-top: 20px;
  padding-bottom: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProgramDescription = ({ children }) => {
  return (
    <StyledSection>
      <StyledDiv>
        <LinkButton to="/dashboard">jetzt starten</LinkButton>
      </StyledDiv>
      <P>{children}</P>
    </StyledSection>
  );
};

export default ProgramDescription;
