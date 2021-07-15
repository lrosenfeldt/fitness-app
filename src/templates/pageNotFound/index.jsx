import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import H1 from "@atoms/h1";
import H2 from "@atoms/h2";
import Text from "@atoms/text";
import Button from "@atoms/button";
import ExitButton from "@atoms/exitButton";
import PageWrapper from "@templates/page";

const ContentWrapper = styled(PageWrapper)`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: ". exitButton" "title title" "animated animated" "message message" "button button";
  padding: 20px ${({ theme }) => theme.contentPadding};
  row-gap: 40px;
`;

const StyledExitButton = styled(ExitButton).attrs({
  buttonType: "arrow",
})`
  grid-area: exitButton;
  align-self: end;
  justify-self: end;
`;

const StyledH1 = styled(H1)`
  grid-area: title;
`;

const pulse = keyframes`
  0% {
    transform: rotate(0turn);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0turn);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0turn);
  }
`;

const Animated404 = styled(H2).attrs({
  children: "404",
})`
  grid-area: animated;
  animation: 1s ${pulse} ease-in-out infinite;
`;

const StyledText = styled(Text)`
  grid-area: message;
`;

const StyledButton = styled(Button).attrs({
  to: "/",
  buttonType: "link",
  children: "Bring mich nach Hause!",
})`
  grid-area: button;
`;

const PageNotFound = ({ message }) => {
  return (
    <ContentWrapper>
      <StyledExitButton />
      <StyledH1>Diese Seite wurde nicht gefunden</StyledH1>
      <Animated404 />
      <StyledText>{message}</StyledText>
      <StyledButton />
    </ContentWrapper>
  );
};

PageNotFound.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PageNotFound;
