import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  margin: 5px 0;
  position: relative;
  width: 100%;
`;

const StyledSpinnerBackrground = styled.div`
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.color.navy};
  box-sizing: border-box;
  height: 40px;
  left: calc(50% - 40px);
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 40px;
`;

const rotateSpinner = keyframes`
  from {
    transform: rotate(0.125turn);
  }
  to {
    transform: rotate(1.125turn);
  }
`;

const StyledSpinner = styled.div`
  animation: 1s ${rotateSpinner} ease-in-out infinite;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: ${({ theme }) => theme.color.navy};
  box-sizing: border-box;
  height: 40px;
  left: calc(50% - 40px);
  position: absolute;
  top: 0;
  width: 40px;
`;

const Spinner = () => {
  return (
    <StyledWrapper>
      <StyledSpinnerBackrground />
      <StyledSpinner />
    </StyledWrapper>
  );
};

export default Spinner;
