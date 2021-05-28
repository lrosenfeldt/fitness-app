import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "API/queries";
import DashboardTemplate from "templates/dashboard/index";
import Spinner from "components/atoms/spinner";
import Text from "components/atoms/text";

const Dashboard = () => {
  const id = "1a985d3f-73d5-414c-abac-bee46d5a6a32";
  const userName = "Lukas";
  const { loading, error, data } = useQuery(GET_WORKOUT_BY_ID, {
    variables: {
      id,
    },
  });
  if (loading) return <Spinner />;
  if (error) return <Text>Da ist wohl etwas schiefgelaufen...</Text>;
  return <DashboardTemplate userName={userName} workout={data.Workout} />;
};

export default Dashboard;
