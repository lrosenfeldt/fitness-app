import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import generateGreeting from "API/generateGreeting";
import H1 from "components/atoms/h1";

const Greeter = ({ userName }) => {
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
  return <H1>{greeting}</H1>;
};

Greeter.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Greeter;
