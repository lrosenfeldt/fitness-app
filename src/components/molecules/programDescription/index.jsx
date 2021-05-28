import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "components/atoms/text";
import Button from "components/atoms/button";

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.beige};
  padding-top: 20px;
  padding-bottom: 17px;
`;

const StyledButton = styled(Button).attrs({
  type: "link",
  children: "jetzt starten",
})`
  margin-bottom: 20px;
`;

const ProgramDescription = ({ description, firstWorkoutID }) => {
  return (
    <StyledSection>
      <StyledButton to={`/program/day1/${firstWorkoutID}`} />
      <Text>{description}</Text>
    </StyledSection>
  );
};

ProgramDescription.propTypes = {
  firstWorkoutID: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgramDescription;
