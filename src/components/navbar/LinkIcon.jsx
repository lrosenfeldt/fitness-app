import styled from 'styled-components';
import iconHome from 'assets/images/icon_home.png';
import iconBrowse from 'assets/images/icon_browse.png';
import iconProfile from 'assets/images/icon_profile.png';
import { NavLink } from 'react-router-dom';
import { Img, P } from 'components/base/base';

const StyledImg = styled(Img)`
  margin-left: auto;
  margin-right: auto;
`;

const StyledFigcaption = styled(P)`
  margin-top: 5px;
  text-align: center;
`;


const LinkFigure = (props) => {
  return (
  <figure>
    <StyledImg src={props.src} alt=""/>
    <StyledFigcaption as="figcaption" lang={props.lang}>{props.children}</StyledFigcaption>
  </figure>);
}

const LinkIcon = (props) => {
  let linkFigure = null;

  if (props.variant === "home") {
    return (
      <NavLink to="/">
        <LinkFigure src={iconHome} lang="en">Home</LinkFigure>
      </NavLink>
    )
  } else if (props.variant === "browse") {
    return (
      <NavLink to="/browse">
        <LinkFigure src={iconBrowse} lang="en">Browse</LinkFigure>
      </NavLink>
    )
  } else if (props.variant === "profil") {
    return (
    <NavLink to="/">
      <LinkFigure src={iconProfile} lang="de">Profil</LinkFigure>
    </NavLink>
    )
  }

  return null
}

export default LinkIcon;