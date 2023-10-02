import { useState } from "react";
import { PreviewBasicInfo } from "./previewBasicInfo";
import { PreviewEduInfo } from "./previewEduInfo";
import { PreviewProfInfo } from "./previewProfInfo";

import "../../styles/previewCV.css";

export function PreviewCV({ basicInfo, educationInfo, professionalInfo }) {
  return (
    <div>
      <PreviewBasicInfo info={basicInfo}></PreviewBasicInfo>
      <PreviewEduInfo info={educationInfo}></PreviewEduInfo>
      <PreviewProfInfo info={professionalInfo}></PreviewProfInfo>
    </div>
  );
}
