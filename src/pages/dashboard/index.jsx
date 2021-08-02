import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "@utils/queries";
import DashboardTemplate from "@templates/dashboard/index";
import Spinner from "@atoms/spinner";
import Text from "@atoms/text";

const Dashboard = () => {
  const id = "7c6b9143-47e7-44e3-b0c0-ae009653dbbf";
  const userName = "Bo";
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
