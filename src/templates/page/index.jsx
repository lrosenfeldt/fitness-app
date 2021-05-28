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
  padding-left: ${({ theme }) => theme.pageMargin};
  padding-right: ${({ theme }) => theme.pageMargin};
  padding-top: 71px;
  position: relative;
  width: 100vw;
`;

const StyledNavbar = styled(Navbar)`
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Page = ({ children, noNav }) => {
  if (noNav) {
    return <PageWrapper noNav={noNav}>{children}</PageWrapper>;
  }
  return (
    <PageWrapper>
      {children}
      <StyledNavbar />
    </PageWrapper>
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
