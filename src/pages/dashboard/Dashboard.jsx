import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H1, SectionWrapper } from 'components/base/base';
import DailyWorkoutPreview from 'components/dailyWorkoutPreview/DailyWorkoutPreview';

const StyledH1 = styled(H1)`
  padding-top: 71px;
  padding-bottom: 53px;
  max-width: 275px;
`;


const Dashboard = (props) => {
  const id = "1a985d3f-73d5-414c-abac-bee46d5a6a32";

  const generateGreeting = (date) => {
    const hours = date.getHours();
    if (hours < 12) {
      return `Guten Morgen, ${props.userName}`;
    } else if (hours < 17) {
      return `Guten Tag, ${props.userName}`;
    }
    return `Guten Abend, ${props.userName}`;
  }

  let date = new Date();
  const [greeting, setGreeting] = useState(generateGreeting(date));
  const greetingIntervalId = setInterval(() => {
    date = new Date();
    setGreeting(generateGreeting(date));
  }, 1000);

  // clear interval after unmounting
  useEffect(() => {
    return () => {
      clearInterval(greetingIntervalId);
    }
  });

  return (
    <SectionWrapper>
      <StyledH1>{greeting}</StyledH1>
      <DailyWorkoutPreview id={id}/>
    </SectionWrapper>
  )
}

export default Dashboard;