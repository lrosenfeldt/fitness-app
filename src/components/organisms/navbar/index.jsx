/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import NavElement from "components/molecules/navElement";

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.color.beige};
  height: ${({ theme }) => theme.navHeight};
  padding: 9px 39px 2px 39px;
  width: 100vw;
`;

const StyledUl = styled.ul`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledLi = styled.li`
  // accesibilty concerns regarding VoiceOver
  // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#accessibility_concerns
  &::before {
    content: "\200B";
  }
`;

const Navbar = ({ className }) => {
  return (
    <StyledNav className={className}>
      <StyledUl>
        <StyledLi>
          <NavElement type="home" to="/" />
        </StyledLi>
        <StyledLi>
          <NavElement type="browse" to="/browse" />
        </StyledLi>
        <StyledLi>
          <NavElement type="profile" to="/profile" />
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;
