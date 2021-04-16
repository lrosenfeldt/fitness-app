import styled from 'styled-components';
import Navbar from 'components/navbar/Navbar';
import WorkoutPreview from 'components/dashboard/WorkoutPreview';
import PreviewHeader from 'components/dashboard/PreviewHeader';

const StyledH1 = styled.h1`
  ${({ theme }) => theme.h1};
  color: ${({ theme }) => theme.blue};
  margin-top: 70px;
  margin-bottom: 53px;
`;

const DashboardWrapper = styled.div`
  margin-left: 17px;
  margin-right: 17px;
`;

const Dashboard = (props) => {
  return (
    <DashboardWrapper>
      <StyledH1>
        Guten<br/>
        Morgen,<br/>
        {props.userName}!
      </StyledH1>
      <PreviewHeader />
      <WorkoutPreview />
      <Navbar />
    </DashboardWrapper>
  )
}

export default Dashboard;