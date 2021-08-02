import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "@atoms/text";
import Button from "@atoms/button";

const StyledSection = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.color.beige};
  display: flex;
  flex-direction: column;
  padding-bottom: 17px;
  padding-left: ${({ theme }) => theme.contentPadding};
  padding-right: ${({ theme }) => theme.contentPadding};
  padding-top: 20px;
`;

const StyledButton = styled(Button).attrs({
  children: "jetzt starten",
})`
  margin-bottom: 20px;
`;

const ProgramDescription = ({ description }) => {
  return (
    <StyledSection>
      <StyledButton to="/program/day1/1" buttonType="link" />
      <Text>{description}</Text>
    </StyledSection>
  );
};

ProgramDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProgramDescription;
