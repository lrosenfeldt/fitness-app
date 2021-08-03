import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "@atoms/img";
import Text from "@atoms/text";
import PageWrapper from "@templates/page";

const StyledDiv = styled.div`
  animation: animate 1s ease-in-out 1s 1 forwards;
  margin: 4rem 1.5rem;
  transform: translateX(-150%);
  @keyframes animate {
    from {
      transform: translateX(-150%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

const CenteredText = styled(Text)`
  text-align: center;
`;

const Workout = ({ alt, src }) => {
  return (
    <PageWrapper>
      <StyledDiv>
        <Img src={src} alt={alt} />
      </StyledDiv>
      <CenteredText>Hier gibt es nichts zu sehen...</CenteredText>
    </PageWrapper>
  );
};

Workout.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Workout;
