import { useState, useEffect } from "react";
import styled from "styled-components";
import { H1, PageWrapper, SectionWrapper } from "components/base/base";
import DailyWorkoutPreview from "components/dailyWorkoutPreview/DailyWorkoutPreview";

const StyledH1 = styled(H1)`
  padding-top: 71px;
  padding-bottom: 53px;
  max-width: 275px;
`;

const Dashboard = ({ userName }) => {
  const id = "1a985d3f-73d5-414c-abac-bee46d5a6a32";

  const generateGreeting = (date) => {
    const hours = date.getHours();
    if (hours < 12) {
      return `Guten Morgen, ${userName}`;
    }
    if (hours < 17) {
      return `Guten Tag, ${userName}`;
    }
    return `Guten Abend, ${userName}`;
  };

  let date = new Date();
  const [greeting, setGreeting] = useState(generateGreeting(date));
  const greetingIntervalId = setInterval(() => {
    date = new Date();
    setGreeting(generateGreeting(date));
  }, 1000 * 60 * 5); // re-check date every 5 minutes

  // clear interval after unmounting
  useEffect(() => {
    return () => {
      clearInterval(greetingIntervalId);
    };
  });

  return (
    <PageWrapper>
      <SectionWrapper>
        <StyledH1>{greeting}</StyledH1>
        <DailyWorkoutPreview id={id} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Dashboard;
