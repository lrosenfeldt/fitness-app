import styled from 'styled-components';
import { P, Dot } from 'components/base/base';

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
`;

const StyledDot = styled(Dot)`
  margin-right: ${({ theme }) => theme.fontSize.small};
`;

const PieChartLabels = (props) => {
  return (
    <div>
      {
        props.data.map((dataset) => 
          <StyledDiv>
            <StyledDot color={dataset.color} />
            <P small>{dataset.title}</P>
          </StyledDiv> 
        )
      }
    </div>
  )
}

export default PieChartLabels;