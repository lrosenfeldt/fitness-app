import styled from 'styled-components';
import iconHome from 'images/icon_home.png';
import iconBrowse from 'images/icon_browse.png';
import iconProfile from 'images/icon_profile.png';

const StyledImg = styled.img`
  height: 100%;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;

const StyledCaption = styled.figcaption`
  ${({ theme }) => theme.link};
  ${(props) => props.theme.link};
  margin-top: 5px;
  text-align: center;
`;


const LinkFigure = (props) => {
  return (
  <figure>
    <StyledImg src={props.src} alt=""/>
    <StyledCaption lang={props.lang}>{props.children}</StyledCaption>
  </figure>);
}

const LinkIcon = (props) => {
  let linkFigure = null;

  if (props.children === "home") {
    linkFigure = <LinkFigure src={iconHome} lang="en">{props.children}</LinkFigure>
  } else if (props.children === "browse") {
    linkFigure = <LinkFigure src={iconBrowse} lang="en">{props.children}</LinkFigure>
  } else if (props.children === "profil") {
    linkFigure = <LinkFigure src={iconProfile} lang="de">{props.children}</LinkFigure>
  }

  return (
    <a>
      {linkFigure}
    </a>
  )
}

export default LinkIcon;