import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Navbar from "components/organisms/navbar";

const PageWrapper = styled.div`
  ${({ theme, noNav }) => {
    if (noNav) {
      return css`
        padding-bottom: 0;
      `;
    }
    return css`
      padding-bottom: calc(${theme.navHeight} + 10px);
    `;
  }}
  width: 100%;
`;

const StyledNavbar = styled(Navbar)`
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Page = ({ className, children, noNav }) => {
  if (noNav) {
    return (
      <PageWrapper className={className} noNav={noNav}>
        {children}
      </PageWrapper>
    );
  }
  return (
    <PageWrapper className={className}>
      {children}
      <StyledNavbar />
    </PageWrapper>
  );
};

Page.defaultProps = {
  className: "",
  noNav: false,
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noNav: PropTypes.bool,
};

export default Page;
