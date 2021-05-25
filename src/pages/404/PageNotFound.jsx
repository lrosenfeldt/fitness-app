import styled, { keyframes } from "styled-components";
import { H1, H2 } from "components/base/base";
import { LinkButton } from "components/base/button/Button";

const StyledDiv = styled.div`
  display: grid;
  row-gap: 70px;
  text-align: center;
  margin: 40px 10px;
  height: 100%;
`;

const leftRight = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledH2 = styled(H2)`
  animation: 3s ${leftRight} linear both infinite;
  perspective: 0;
`;

const PageNotFound = () => {
  return (
    <StyledDiv>
      <H1>Die Seite wurde nicht gefunden, sorry!</H1>
      <StyledH2>404</StyledH2>
      <LinkButton to="/">Bring mich nach Hause!</LinkButton>
    </StyledDiv>
  );
};

export default PageNotFound;
