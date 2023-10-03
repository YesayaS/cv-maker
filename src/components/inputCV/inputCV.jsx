import { Basic } from "./basic";
import { Education } from "./education";
import { Experience } from "./experience";

export function InputCV({
  basic,
  education,
  experience,
  handleBasic,
  educationHandlers,
  experienceHandlers,
}) {
  return (
    <div className="my-3 mr-2 flex w-96 flex-col">
      <div className="sectionContainer">
        <h1 className="text-xl font-bold">CV Maker</h1>
      </div>
      <Basic basic={basic} handlers={handleBasic}></Basic>
      <Experience
        experience={experience}
        handlers={experienceHandlers}
      ></Experience>
      <Education education={education} handlers={educationHandlers}></Education>
    </div>
  );
}
