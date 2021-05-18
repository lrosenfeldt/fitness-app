import styled from 'styled-components';
import LinkIcon from './LinkIcon/LinkIcon';

const StyledNav = styled.nav`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.color.beige};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  height: ${({ theme }) => theme.navHeight};
  justify-content: space-between;
  left: 0;
  padding: 8px 40px 2px 40px;
  position: fixed;
  width: 100vw;
`;

const Navbar = (props) => {
  return (
    <StyledNav>
        <LinkIcon type="home"></LinkIcon>
        <LinkIcon type="browse"></LinkIcon>
        <LinkIcon type="profile"></LinkIcon>
    </StyledNav>
  )
}

export default Navbar;