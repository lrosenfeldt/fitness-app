import { useQuery } from '@apollo/client';
import { GET_ALL_PROGRAMS } from 'queries/index';
import { P } from 'components/base/base';
import Spinner from 'components/base/spinner/Spinner';
import WorkoutCard from 'components/workoutCard/WorkoutCard';


const WorkoutBrowser = (props) => {
  const { loading, error, data } = useQuery(GET_ALL_PROGRAMS, { variables: {
    preview: true,
  }});

  if (loading) return <Spinner />
  if (error) return <P>Hmm.... Scheinbar gibt es keine Programme.</P>

  return (
    <div>
      {
        data.allProgram.map((program) => (
        <WorkoutCard isNew key={program._id}>{program.title}</WorkoutCard>
        ))
      }
    </div>
  )
};

export default WorkoutBrowser;