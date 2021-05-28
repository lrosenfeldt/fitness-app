import styled from "styled-components";
import { PieChart as PieChartMinimal } from "react-minimal-pie-chart";
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
  column-gap: 12px;
  display: grid;
  grid-template-columns: 12px 1fr;
`;

const pieChartColors = ["#7A8778", "#939C91", "#BBC8B9", "#D2DDD0"];

const PieChart = () => {
  const data = [
    { title: "Krafttraining", value: 1, color: pieChartColors[0] },
    { title: "Cardio", value: 2, color: pieChartColors[1] },
    { title: "Koordination", value: 3, color: pieChartColors[2] },
    { title: "Beweglichkeit", value: 4, color: pieChartColors[3] },
  ];
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
