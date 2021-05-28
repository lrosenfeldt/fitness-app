import PropTypes from "prop-types";
import PieChart from "components/molecules/pieChart";
import ProgramDescription from "components/molecules/programDescription";
import ProgramHeader from "components/molecules/programHeader";
import PageWraper from "templates/page";

const Program = ({
  description,
  difficulty,
  duration,
  firstWorkoutID,
  focus,
  title,
}) => {
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
      <PieChart />
    </PageWraper>
  );
};

Program.defaultProps = {
  description: "",
};

Program.propTypes = {
  description: PropTypes.string,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  firstWorkoutID: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Program;
