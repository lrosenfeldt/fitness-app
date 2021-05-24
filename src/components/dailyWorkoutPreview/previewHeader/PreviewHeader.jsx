import styled from "styled-components";
import { H2, P } from "components/base/base";

const PreviewHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const PreviewHeader = () => {
  return (
    <PreviewHeaderWrapper>
      <H2>Dein Workout heute</H2>
      <P small>Trainingsplan</P>
    </PreviewHeaderWrapper>
  );
};

export default PreviewHeader;
