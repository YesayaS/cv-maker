import "../../styles/inputCV.css";
import { BasicInfo } from "./basicInfo";
import { EducationInfo } from "./educationInfo";

export function InputCV({
  basicInfo,
  educationInfo,
  professionalInfo,
  handleBasicInfo,
  handleProfessionalInfo,
  eduHandlers,
}) {
  return (
    <div>
      <BasicInfo basicInfo={basicInfo} onChange={handleBasicInfo}></BasicInfo>
      <EducationInfo
        educationInfo={educationInfo}
        eduHandlers={eduHandlers}
      ></EducationInfo>
      {/* <ProfessionalInfo professionalInfo={professionalInfo} onChange={handleProfessionalInfo}></ProfessionalInfo> */}
    </div>
  );
}
