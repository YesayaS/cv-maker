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
    <div className="m-3 flex flex-col">
      <div className="formContainer">
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
