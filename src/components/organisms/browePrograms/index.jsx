import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "components/atoms/text";
import ProgramCard from "components/molecules/programCard";

const ListingWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  padding-bottom: 20px;
  padding-top: 27px;
  row-gap: 20px;
  width: 100%;
`;

const FilterButton = styled(Text).attrs({
  small: true,
  children: "Filter",
})``;

const BrowsePrograms = ({ programs }) => {
  return (
    <>
      <FilterButton />
      <ListingWrapper>
        {programs.map((program) => (
          <ProgramCard
            key={program._id}
            id={program._id}
            title={program.title}
          />
        ))}
      </ListingWrapper>
    </>
  );
};

BrowsePrograms.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default BrowsePrograms;
