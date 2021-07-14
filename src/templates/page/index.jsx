import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "@organisms/navbar";

const PageWrapper = styled.div`
  padding-bottom: ${({ theme, noNav }) => (noNav && 0) || theme.navHeight};
  width: 100%;
`;

const StyledNavbar = styled(Navbar)`
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Page = ({ className, children, noNav = false }) => {
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

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noNav: PropTypes.bool,
};

export default Page;
