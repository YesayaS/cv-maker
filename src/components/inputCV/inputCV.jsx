import "../../styles/inputCV.css";
import { BasicInfo } from "./basicInfo";
import { EducationInfo } from "./educationInfo";

export function InputCV({
  basicInfo,
  educationInfo,
  professionalInfo,
  handleBasicInfo,
  handleEducationInfo,
  handleProfessionalInfo,
  handleAddEdu,
  handleRemoveEdu
}) {
  return (
    <div>
      <BasicInfo basicInfo={basicInfo} onChange={handleBasicInfo}></BasicInfo>
      <EducationInfo
        educationInfo={educationInfo}
        onChange={handleEducationInfo}
        addEdu={handleAddEdu}
        removeEdu={handleRemoveEdu}
      ></EducationInfo>
      {/* <ProfessionalInfo professionalInfo={professionalInfo} onChange={handleProfessionalInfo}></ProfessionalInfo> */}
    </div>
  );
}
