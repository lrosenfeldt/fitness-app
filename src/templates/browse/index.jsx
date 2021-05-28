import styled from "styled-components";
import PageWrapper from "templates/page";
import BrowsePrograms from "components/organisms/browePrograms";
import H2 from "components/atoms/h2";

const ContentWrapper = styled(PageWrapper)`
  padding-left: ${({ theme }) => theme.contentPadding};
  padding-right: ${({ theme }) => theme.contentPadding};
  padding-top: 75px;
`;

const StyledH2 = styled(H2)`
  padding-bottom: 25px;
`;

const Browse = ({ programs }) => {
  return (
    <ContentWrapper>
      <StyledH2 lang="en">Browse</StyledH2>
      <BrowsePrograms programs={programs} />
    </ContentWrapper>
  );
};

export default Browse;
