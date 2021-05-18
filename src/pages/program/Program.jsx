import ProgramChart from 'components/programChart/ProgramChart';
import ProgramDescription from 'components/programDescription/ProgramDescription';
import ProgramHeader from 'components/programHeader/ProgramHeader';

const Program = () => {
  return (
    <div>
      <ProgramHeader />
      <ProgramDescription>
        Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.
      </ProgramDescription>
      <ProgramChart />
    </div>
  )
};

export default Program;