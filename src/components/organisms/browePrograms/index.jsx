import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROGRAMS } from "API/queries";
import Spinner from "components/atoms/spinner";
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
  as: "button",
  small: true,
  children: "Filter",
})``;

const BrowsePrograms = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROGRAMS);

  if (loading) return <Spinner />;
  if (error) return <Text>Da ist wohl etwas schiefgelaufen...</Text>;
  return (
    <>
      <FilterButton />
      <ListingWrapper>
        {data.allProgram.map((program) => (
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

export default BrowsePrograms;
