import styled from "styled-components";
import { PieChart as PieChartMinimal } from "react-minimal-pie-chart";
import chartDataFromWorkouts from "API/chartDataFromWorkouts";
import Text from "components/atoms/text";
import Dot from "components/atoms/dot";

const StyledSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled(Text).attrs({
  as: "li",
  small: true,
})`
  align-items: center;
  column-gap: 12px;
  display: grid;
  grid-template-columns: 12px 1fr;
  padding: 9px 0;
`;

const pieChartColors = ["#7A8778", "#939C91", "#BBC8B9", "#D2DDD0"];

const PieChart = ({ workouts }) => {
  const data = chartDataFromWorkouts(workouts, pieChartColors);
  return (
    <StyledSection>
      <PieChartMinimal data={data} segmentsShift={0.5} radius={49.5} />
      <StyledUl>
        {data.map((dataset, index) => (
          <StyledLi key={pieChartColors[index]}>
            <Dot color={pieChartColors[index]} />
            {dataset.title}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledSection>
  );
};

export default PieChart;
