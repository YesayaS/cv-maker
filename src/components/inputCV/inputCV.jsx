import "../../styles/inputCV.css";
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
    <div>
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
