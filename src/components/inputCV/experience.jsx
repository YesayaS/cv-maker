import { useState } from "react";
import { ExperienceForm } from "./experienceForm";

export function Experience({ experience, handlers }) {
  const arrayStatus = [...Array(experience.length).fill(false)];
  const [isShow, setIsShow] = useState(arrayStatus);

  function changeIsShow(i) {
    const updatedIsShow = [...isShow];
    updatedIsShow[i] = !updatedIsShow[i];
    setIsShow(updatedIsShow);
  }

  const { handleExperience, handleAddExperience, handleRemoveExperience } =
    handlers;
  return (
    <div className="formContainer">
      <h2>Professional Experience</h2>
      {experience.map((info, i) => {
        return (
          <div key={info.id}>
            <button onClick={() => changeIsShow(i)}> {info.companyName}</button>
            <button onClick={() => handleRemoveExperience(i)}>Remove</button>
            {!isShow[i] ? null : (
              <ExperienceForm
                info={info}
                onChange={handleExperience}
                i={i}
              ></ExperienceForm>
            )}
          </div>
        );
      })}
      <button onClick={handleAddExperience}>Add +</button>
    </div>
  );
}
