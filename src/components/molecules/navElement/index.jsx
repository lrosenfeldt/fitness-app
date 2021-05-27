import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "components/atoms/img";
import NavLink from "components/atoms/navLink";
import iconHome from "assets/images/icon_home.png";
import iconBrowse from "assets/images/icon_browse.png";
import iconProfile from "assets/images/icon_profile.png";

const StyledNavLink = styled(NavLink)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2px;
  align-items: end;
  justify-items: center;
`;

const StyledImg = styled(Img)`
  max-height: 25px;
`;

const NavElement = ({ to, type }) => {
  if (type === "home") {
    return (
      <StyledNavLink to={to} lang="en">
        <StyledImg portrait src={iconHome} alt="Home page icon" lang="en" />
        Home
      </StyledNavLink>
    );
  }
  if (type === "browse") {
    return (
      <StyledNavLink to={to} lang="en">
        <StyledImg
          portrait
          src={iconBrowse}
          alt="Browse programs page icon"
          lang="en"
        />
        Browse
      </StyledNavLink>
    );
  }
  if (type === "profile") {
    return (
      <StyledNavLink to={to} lang="de">
        <StyledImg
          portrait
          src={iconProfile}
          alt="Profile page icon"
          lang="en"
        />
        Profil
      </StyledNavLink>
    );
  }
  return <div>Fehler</div>;
};

NavElement.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["home", "browse", "profile"]).isRequired,
};

export default NavElement;
