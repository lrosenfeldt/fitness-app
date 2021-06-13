import styled from "styled-components";
import PropTypes from "prop-types";
import ProgramCard from "components/molecules/programCard";
import isOlderThan from "API/isOlderThan";
import FilterForm from "components/molecules/filterForm";

const ListingWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  padding-bottom: 20px;
  padding-top: 27px;
  row-gap: 20px;
  width: 100%;
`;

const BrowsePrograms = ({ programs, refetch }) => {
  return (
    <>
      <FilterForm refetch={refetch} />
      <ListingWrapper>
        {programs.map((program) => (
          <ProgramCard
            key={program._id}
            id={program._id}
            isNew={!isOlderThan(program._createdAt, 2)}
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
  refetch: PropTypes.func.isRequired,
};

export default BrowsePrograms;
