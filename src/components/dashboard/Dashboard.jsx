import styled from 'styled-components';
import { useState } from 'react';
import { H1, PageWrapper } from 'components/base/base';
import Navbar from 'components/navbar/Navbar';
import WorkoutPreview from 'components/dashboard/WorkoutPreview';

const StyledH1 = styled(H1)`
  margin-top: 71px;
  margin-bottom: 53px;
  max-width: 275px;
`;


const Dashboard = (props) => {
  const greeting = () => {
    return "Guten Morgen"
  };

  return (
    <PageWrapper>
      <Navbar />
      <StyledH1>{`${greeting()}, ${props.userName}`}</StyledH1>
      <WorkoutPreview />
    </PageWrapper>
  )
}

export default Dashboard;