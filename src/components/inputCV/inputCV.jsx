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
    <div className="flex flex-col m-3">
      <div className="formContainer">
        <h1 className="text-xl font-bold">CV Maker</h1>
      </div>
      <BasicInfo basicInfo={basicInfo} onChange={handleBasicInfo}></BasicInfo>
      <EducationInfo
        educationInfo={educationInfo}
        eduHandlers={eduHandlers}
      ></EducationInfo>
      <ProfessionalInfo
        professionalInfo={professionalInfo}
        handlers={profHandlers}
      ></ProfessionalInfo>
    </div>
  );
}
