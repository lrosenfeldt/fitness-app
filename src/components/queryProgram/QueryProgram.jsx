import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_PROGRAM_BY_ID } from 'API/queries/index';
import { P } from 'components/base/base';
import Spinner from 'components/base/spinner/Spinner';
import ProgramChart from 'components/programChart/ProgramChart';
import ProgramDescription from 'components/programDescription/ProgramDescription';
import ProgramHeader from 'components/programHeader/ProgramHeader';
import WorkoutListing from 'components/workoutListing/WorkoutListing';


const StyledP = styled(P)`
  margin: 50px 10px;
  text-align: center;
`;

const QueryProgram = ({ id, title }) => {
  console.log(id);
  const { loading, error, data } = useQuery(GET_PROGRAM_BY_ID, { variables: {
    id: id,
  }});

  if (loading) return <Spinner />;
  if (error) return <StyledP>Da ist wohl etwas schiefgelaufen.</StyledP>

  console.log()

  return (
    <div>
      <ProgramHeader
        title={data.Program.title}
        duration={data.Program.duration}
        difficulty={data.Program.difficulty}
        focus={data.Program.focus}
      />
      <ProgramDescription>
        {data.Program.description}
      </ProgramDescription>
      <ProgramChart />
      <WorkoutListing
        workouts={data.Program.workouts} 
      />
    </div>
  )
};

export default QueryProgram;