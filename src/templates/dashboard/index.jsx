import styled from "styled-components";
import PropTypes from "prop-types";
import PageWrapper from "templates/page";

const GreeterWrapper = styled.div`
  padding-bottom: 53px;
  padding-top: 71px;
  max-width: 255px;
`;

const WorkoutPreviewWrapper = styled.div`
  margin-bottom: 11px;
`;

const Dashboard = ({ greeter, workoutPreview }) => {
  return (
    <PageWrapper>
      <GreeterWrapper>{greeter}</GreeterWrapper>
      <WorkoutPreviewWrapper>{workoutPreview}</WorkoutPreviewWrapper>
    </PageWrapper>
  );
};

Dashboard.propTypes = {
  greeter: PropTypes.element.isRequired,
  workoutPreview: PropTypes.element.isRequired,
};

export default Dashboard;
