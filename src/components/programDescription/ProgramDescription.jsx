import styled from 'styled-components';
import { P, SectionWrapper } from 'components/base/base';
import { LinkButton } from 'components/base/button/Button';

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

const ProgramDescription = (props) => {
  console.log(props.match);
  return (
    <StyledSection>
      <StyledDiv>
        <LinkButton to="/dashboard">jetzt starten</LinkButton>
      </StyledDiv>
      <P>{props.children}</P>
    </StyledSection>
  )
}

export default ProgramDescription;