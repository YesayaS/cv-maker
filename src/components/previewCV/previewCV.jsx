import { PreviewBasicInfo } from "./previewBasicInfo";
import { PreviewEduInfo } from "./previewEduInfo";
import { PreviewProfInfo } from "./previewProfInfo";

export function PreviewCV({ basicInfo, educationInfo, professionalInfo }) {
  return (
    <div className="flex w-a4 h-a4 flex-col bg-white p-10 m-5 font-serif">
      <PreviewBasicInfo info={basicInfo}></PreviewBasicInfo>
      <PreviewProfInfo info={professionalInfo}></PreviewProfInfo>
      <PreviewEduInfo info={educationInfo}></PreviewEduInfo>
    </div>
  );
}
