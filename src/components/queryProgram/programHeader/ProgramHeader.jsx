import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { H1, SectionWrapper } from "components/base/base";
import xIcon from "assets/images/icon_x_close.png";
import TagBox from "./tagBox/TagBox";

const StyledSection = styled(SectionWrapper)`
  ${({ theme }) => theme.gradient.yellowToPink};
  height: 75vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "exit"
    "title"
    "tags";
`;

const StyledH1 = styled(H1)`
  text-align: center;
  grid-area: title;
  align-self: center;
`;

const StyledNavLink = styled(NavLink)`
  background-image: url(${xIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 15px;
  width: 15px;
  justify-self: end;
  margin-top: 25px;
`;

const ExitButton = () => {
  return <StyledNavLink to="/browse" />;
};

const ProgramHeader = ({ difficulty, duration, focus, title }) => {
  return (
    <StyledSection>
      <ExitButton />
      <StyledH1>{title || "Titel des Programms"}</StyledH1>
      <TagBox difficulty={difficulty} duration={duration} focus={focus} />
    </StyledSection>
  );
};

export default ProgramHeader;
