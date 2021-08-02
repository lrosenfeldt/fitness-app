import styled from "styled-components";
import NavElement from "@molecules/navElement";

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.color.beige};
  height: ${({ theme }) => theme.navHeight};
  padding: 9px 39px 2px 39px;
  width: 100%;
`;

const StyledUl = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const Navbar = ({ className }) => {
  return (
    <StyledNav className={className}>
      <StyledUl>
        <li>
          <NavElement type="home" to="/" />
        </li>
        <li>
          <NavElement type="browse" to="/browse" />
        </li>
        <li>
          <NavElement type="profile" to="/profile" />
        </li>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;
