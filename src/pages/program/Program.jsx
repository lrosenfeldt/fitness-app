import { useParams } from "react-router-dom";
import QueryProgram from "components/queryProgram/QueryProgram";

const Program = () => {
  const { id } = useParams();
  return <QueryProgram id={id} />;
};

export default Program;
