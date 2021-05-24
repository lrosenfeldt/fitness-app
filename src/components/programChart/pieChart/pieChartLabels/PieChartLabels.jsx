import styled from "styled-components";
import { P, Dot } from "components/base/base";

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
`;

const StyledDot = styled(Dot)`
  margin-right: ${({ theme }) => theme.fontSize.small};
`;

const PieChartLabels = ({ data }) => {
  return (
    <div>
      {data.map((dataset) => (
        <StyledDiv key={dataset.title}>
          <StyledDot color={dataset.color} />
          <P small>{dataset.title}</P>
        </StyledDiv>
      ))}
    </div>
  );
};

export default PieChartLabels;
