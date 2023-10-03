import { BasicInfo } from "./basicInfo";
import { EducationInfo } from "./educationInfo";
import { ProfessionalInfo } from "./professionalInfo";

export function InputCV({
  basicInfo,
  educationInfo,
  professionalInfo,
  handleBasicInfo,
  eduHandlers,
  profHandlers,
}) {
  return (
    <div className="m-3 flex flex-col">
      <div className="formContainer">
        <h1 className="text-xl font-bold">CV Maker</h1>
      </div>
      <BasicInfo basicInfo={basicInfo} onChange={handleBasicInfo}></BasicInfo>
      <ProfessionalInfo
        professionalInfo={professionalInfo}
        handlers={profHandlers}
      ></ProfessionalInfo>
      <EducationInfo
        educationInfo={educationInfo}
        eduHandlers={eduHandlers}
      ></EducationInfo>
    </div>
  );
}
