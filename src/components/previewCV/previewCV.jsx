import { PreviewBasicInfo } from "./previewBasicInfo";
import { PreviewEduInfo } from "./previewEduInfo";
import { PreviewProfInfo } from "./previewProfInfo";

export function PreviewCV({ basicInfo, educationInfo, professionalInfo }) {
  return (
    <div className="m-5 flex h-a4 w-a4 flex-col bg-white p-10 font-serif">
      <PreviewBasicInfo info={basicInfo}></PreviewBasicInfo>
      <PreviewProfInfo info={professionalInfo}></PreviewProfInfo>
      <PreviewEduInfo info={educationInfo}></PreviewEduInfo>
    </div>
  );
}
