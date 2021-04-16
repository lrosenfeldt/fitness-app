import styled from 'styled-components';
import LinkIcon from './LinkIcon';

const StyledNav = styled.nav`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.pink};
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100vw;
  margin-top: 10px;
`;

const Navbar = (props) => {
  return (
    <StyledNav>
      <LinkIcon>home</LinkIcon>
      <LinkIcon>browse</LinkIcon>
      <LinkIcon>profil</LinkIcon>
    </StyledNav>
  )
}

export default Navbar;