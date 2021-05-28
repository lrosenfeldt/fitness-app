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

  return (
    <ProgramTemplate
      difficulty={data.Program.difficulty}
      duration={data.Program.duration}
      focus={data.Program.focus}
      title={data.Program.title}
      description={data.Program.description}
      firstWorkoutID="empty"
    />
  );
};

export default Program;
