import "../styles/inputCV.css";
import { BasicInfo } from "./basicInfo";
import { EducationInfo } from "./educationInfo";
import { ProfessionalInfo } from "./professionalInfo";

export function InputCV({
  basicInfo,
  educationInfo,
  professionalInfo,
  handleBasicInfo,
  handleEducationInfo,
  handleProfessionalInfo,
}) {
  return (
    <div>
      <BasicInfo basicInfo={basicInfo} onChange={handleBasicInfo}></BasicInfo>
      <EducationInfo
        educationInfo={educationInfo}
        onChange={handleEducationInfo}
      ></EducationInfo>
      {/* <ProfessionalInfo professionalInfo={professionalInfo} onChange={handleProfessionalInfo}></ProfessionalInfo> */}
    </div>
  );
}
