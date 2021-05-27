import DashboardTemplate from "templates/dashboard/index";
import Greeter from "components/molecules/greeter/index";
import DailyWorkoutPreview from "components/organisms/dailyWorkoutPreview/index";

const Dashboard = () => {
  const id = "1a985d3f-73d5-414c-abac-bee46d5a6a32";
  const userName = "Lukas";
  return (
    <DashboardTemplate
      greeter={<Greeter userName={userName} />}
      workoutPreview={<DailyWorkoutPreview id={id} />}
    />
  );
};

export default Dashboard;
