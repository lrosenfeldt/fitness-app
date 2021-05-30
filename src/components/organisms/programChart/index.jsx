import styled from "styled-components";
import PropTypes from "prop-types";
import H3 from "components/atoms/h3";
import PieChart from "components/molecules/pieChart";

const StyledSection = styled.section`
  padding: 30px ${({ theme }) => theme.contentPadding};
`;

const StyledH3 = styled(H3)`
  padding-bottom: 40px;
`;

const ProgramChart = ({ className }) => {
  return (
    <StyledSection className={className}>
      <StyledH3>So ist das Program aufgeteilt:</StyledH3>
      <PieChart />
    </StyledSection>
  );
};

ProgramChart.defaultProps = {
  className: "",
};

ProgramChart.propTypes = {
  className: PropTypes.string,
};

export default ProgramChart;
