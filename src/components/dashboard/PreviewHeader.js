import styled from 'styled-components';

const PreviewHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledH2 = styled.h2`
  ${({ theme }) => theme.h2};
`;

const PlanLabel = styled.p`
  ${({ theme }) => theme.smallText};
`;

const PreviewHeader = () => {
  return (
    <PreviewHeaderWrapper>
      <StyledH2>Dein Workout heute</StyledH2>
      <PlanLabel>Trainingsplan</PlanLabel>
    </PreviewHeaderWrapper>
  )
}

export default PreviewHeader;