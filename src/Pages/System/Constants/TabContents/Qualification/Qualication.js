import { Card } from "react-bootstrap";
import EducationTable from "./Tables/EducationTable";
import LanguageTable from "./Tables/LanguageTable";
import SkillTable from "./Tables/SkillTable";

export default function Qualification({
  eduData,
  lanData,
  skillData,
  setIsError,
  getAll
}) {




    return (
        <Card>
          <Card.Body>
            <EducationTable setIsError={setIsError} getAll={getAll} data={eduData}/>
            <LanguageTable setIsError={setIsError} getAll={getAll} data={lanData}/>
            <SkillTable setIsError={setIsError} getAll={getAll} data={skillData}/>
      </Card.Body></Card>
    );
  }
  