import styled from "styled-components";
import { H3, SectionWrapper } from "components/base/base";
import PieChart from "components/molecules/pieChart";

const StyledH3 = styled(H3)`
  margin-bottom: 40px;
  margin-top: 30px;
`;

const StyledSection = styled(SectionWrapper)`
  padding-bottom: 34px;
`;

const ProgramChart = () => {
  return (
    <StyledSection>
      <StyledH3>So ist das Programm aufgeteilt:</StyledH3>
      <PieChart />
    </StyledSection>
  );
};

export default ProgramChart;
