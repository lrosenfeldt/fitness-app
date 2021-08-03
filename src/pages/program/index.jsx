import ProgramTemplate from "@templates/program";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROGRAM_BY_ID } from "@utils/queries";
import Spinner from "@atoms/spinner";
import Text from "@atoms/text";

const Program = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROGRAM_BY_ID, {
    variables: {
      id,
    },
  });
  if (loading) return <Spinner />;
  if (error) return <Text>Da ist wohl etwas schiefgelaufen.</Text>;
  const { Program: ProgramData } = data;
  return (
    <ProgramTemplate
      description={ProgramData.description}
      difficulty={ProgramData.difficulty}
      duration={ProgramData.duration}
      firstWorkoutID="empty"
      focus={ProgramData.focus}
      title={ProgramData.title}
      workouts={ProgramData.workouts}
    />
  );
};
export default Program;
