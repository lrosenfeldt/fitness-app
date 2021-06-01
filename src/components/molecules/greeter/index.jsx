import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import generateGreeting from "API/generateGreeting";
import H1 from "components/atoms/h1";

const StyledH1 = styled(H1)`
  white-space: pre;
`;

const Greeter = ({ className, userName }) => {
  let date = new Date();
  const [greeting, setGreeting] = useState(
    generateGreeting(date.getHours(), userName)
  );
  const checkDaytimeIntervalId = setInterval(() => {
    date = new Date();
    setGreeting(generateGreeting(date.getHours(), userName));
  }, 1000 * 60 * 5); // check daytime every 5 minutes
  // clear interval after unmount
  useEffect(() => {
    return () => {
      clearInterval(checkDaytimeIntervalId);
    };
  });
  return (
    <StyledH1 className={className}>{greeting.replaceAll(" ", "\n")}</StyledH1>
  );
};

Greeter.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string.isRequired,
};

export default Greeter;
