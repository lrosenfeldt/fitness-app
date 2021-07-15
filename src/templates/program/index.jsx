/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import ProgramDescription from "@molecules/programDescription";
import ProgramHeader from "@molecules/programHeader";
import PageWraper from "@templates/page";
import ProgramChart from "@organisms/programChart";
import WorkoutListing from "@organisms/workoutListing/";

const Program = ({
  description,
  difficulty,
  duration,
  focus,
  title,
  workouts,
}) => {
  const firstWorkoutID = workouts[0].Workout._id;
  return (
    <PageWraper>
      <ProgramHeader
        difficulty={difficulty}
        duration={duration}
        focus={focus}
        title={title}
      />
      <ProgramDescription
        description={description}
        firstWorkoutID={firstWorkoutID}
      />
      <ProgramChart workouts={workouts} />
      <WorkoutListing workouts={workouts} />
    </PageWraper>
  );
};

Program.propTypes = {
  description: PropTypes.string,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  focus: PropTypes.string.isRequired,
};

export default Program;
