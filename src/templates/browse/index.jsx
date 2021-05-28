import styled from "styled-components";
import PropTypes from "prop-types";
import PageWrapper from "templates/page";
import H2 from "components/atoms/h2";

const HeadingWrapper = styled.div`
  padding-bottom: 25px;
`;

const Browse = ({ browsable, title }) => {
  return (
    <PageWrapper>
      <HeadingWrapper>
        <H2 lang={title.lang}>{title.text}</H2>
      </HeadingWrapper>
      {browsable}
    </PageWrapper>
  );
};

Browse.defaultProps = {
  title: {
    lang: "de",
  },
};

Browse.propTypes = {
  browsable: PropTypes.element.isRequired,
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    lang: PropTypes.oneOf(["de", "en"]),
  }),
};

export default Browse;
