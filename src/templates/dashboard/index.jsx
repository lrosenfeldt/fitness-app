import styled from "styled-components";
import PageWrapper from "@templates/page";
import Greeter from "@molecules/greeter";
import DailyWorkoutPreview from "@organisms/dailyWorkoutPreview";

const ContentWrapper = styled(PageWrapper)`
  padding-left: ${({ theme }) => theme.contentPadding};
  padding-right: ${({ theme }) => theme.contentPadding};
  padding-top: 71px;
`;

const StyledGreeter = styled(Greeter)`
  padding-bottom: 53px;
`;

const Dashboard = ({ userName, workout }) => {
  return (
    <ContentWrapper>
      <StyledGreeter userName={userName} />
      <DailyWorkoutPreview workout={workout} />
    </ContentWrapper>
  );
};

export default Dashboard;
