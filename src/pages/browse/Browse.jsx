import BrowsePrograms from "components/organisms/browePrograms";
import BrowseWrapper from "templates/browse";

const Browse = () => {
  return (
    <BrowseWrapper
      title={{ text: "Browse", lang: "en" }}
      browsable={<BrowsePrograms />}
    />
  );
};

export default Browse;
