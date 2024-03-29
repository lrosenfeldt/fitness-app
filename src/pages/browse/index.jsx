import { useQuery } from "@apollo/client";
import { GET_ALL_PROGRAMS } from "@utils/queries";
import BrowseWrapper from "@templates/browse";
import Spinner from "@atoms/spinner";
import Text from "@atoms/text";

const Browse = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_PROGRAMS);
  if (loading) return <Spinner />;
  if (error) return <Text>Da ist wohl etwas schiefgelaufen...</Text>;
  return <BrowseWrapper programs={data.allProgram} refetch={refetch} />;
};

export default Browse;
