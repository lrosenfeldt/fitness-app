import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "components/organisms/navbar";

const PageWrapper = styled.div`
  --navHeight: ${({ theme }) => theme.navHeight};
  box-sizing: border-box;
  height: calc(100vh - var(--navHeight));
  margin-bottom: ${({ theme, noNav }) => (noNav && theme.navHeight) || 0};
  padding: 0 ${({ theme }) => theme.pageMargin};
  position: relative;
  width: 100vw;
`;

const StyledNavbar = styled(Navbar)`
  bottom: 0;
  height: ${({ theme }) => theme.navHeight};
  left: 0;
  position: absolute;
`;

const Page = ({ children, noNav }) => {
  if (noNav) {
    return <PageWrapper noNav={noNav}>{children}</PageWrapper>;
  }
  return (
    <>
      <PageWrapper>{children}</PageWrapper>
      <StyledNavbar />
    </>
  );
};

Page.defaultProps = {
  noNav: false,
};

Page.propTypes = {
  noNav: PropTypes.bool,
  children: PropTypes.node,
};

export default Page;
