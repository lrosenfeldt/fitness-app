import styled from "styled-components";
import PropTypes from "prop-types";
import H3 from "@atoms/h3";
import PieChart from "@molecules/pieChart";

const StyledSection = styled.section`
  padding: 30px ${({ theme }) => theme.contentPadding};
`;

const StyledH3 = styled(H3)`
  padding-bottom: 40px;
`;

const ProgramChart = ({ className, workouts }) => {
  return (
    <StyledSection className={className}>
      <StyledH3>So ist das Program aufgeteilt:</StyledH3>
      <PieChart workouts={workouts} />
    </StyledSection>
  );
};

ProgramChart.propTypes = {
  className: PropTypes.string,
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      Workout: PropTypes.shape({
        categories: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]),
      }),
    })
  ).isRequired,
};

export default ProgramChart;
