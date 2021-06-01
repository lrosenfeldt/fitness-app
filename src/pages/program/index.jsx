import ProgramTemplate from "templates/program";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROGRAM_BY_ID } from "API/queries";
import Spinner from "components/atoms/spinner";
import Text from "components/atoms/text";

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
      difficulty={ProgramData.difficulty}
      duration={ProgramData.duration}
      focus={ProgramData.focus}
      title={ProgramData.title}
      description={ProgramData.description}
      firstWorkoutID="empty"
      workouts={ProgramData.workouts}
    />
  );
};

export default Program;
