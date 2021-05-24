import styled from "styled-components";
import iconHome from "assets/images/icon_home.png";
import iconBrowse from "assets/images/icon_browse.png";
import iconProfile from "assets/images/icon_profile.png";
import { Img, NavLink } from "components/base/base";

const StyledFigure = styled.figure``;

const StyledImg = styled(Img)`
  margin-left: auto;
  margin-right: auto;
`;

const StyledFigcaption = styled(NavLink)`
  padding-top: 2.5px;
  text-align: center;
`;

const LinkFigure = ({ children, lang, src }) => {
  return (
    <StyledFigure>
      <StyledImg portrait src={src} alt="" />
      <StyledFigcaption as="figcaption" lang={lang}>
        {children}
      </StyledFigcaption>
    </StyledFigure>
  );
};

const LinkIcon = ({ type }) => {
  if (type === "home") {
    return (
      <div>
        <NavLink to="/">
          <LinkFigure src={iconHome} lang="en">
            Home
          </LinkFigure>
        </NavLink>
      </div>
    );
  }
  if (type === "browse") {
    return (
      <div>
        <NavLink to="/browse">
          <LinkFigure src={iconBrowse} lang="en">
            Browse
          </LinkFigure>
        </NavLink>
      </div>
    );
  }
  if (type === "profile") {
    return (
      <div>
        <NavLink to="/profile">
          <LinkFigure src={iconProfile} lang="de">
            Profil
          </LinkFigure>
        </NavLink>
      </div>
    );
  }

  return null;
};

export default LinkIcon;
