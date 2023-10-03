import { PreviewBasic } from "./previewBasic";
import { PreviewExperience } from "./previewExperience";
import { PreviewEducation } from "./previewEducation";

export function PreviewCV({ basic, education, experience }) {
  return (
    <div className="m-5 flex h-a4 w-a4 flex-col bg-white p-10 font-serif">
      <PreviewBasic info={basic}></PreviewBasic>
      {!experience.length ? (
        ""
      ) : (
        <PreviewExperience info={experience}></PreviewExperience>
      )}
      {!education.length ? (
        ""
      ) : (
        <PreviewEducation info={education}></PreviewEducation>
      )}
    </div>
  );
}
