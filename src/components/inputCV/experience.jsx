import { useState } from "react";
import { ExperienceForm } from "./experienceForm";
// import { TrashIcon } from "@heroicons/react/20/solid";
import "material-icons/iconfont/outlined.css";

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
    <div className="sectionContainer">
      <h2>Professional Experience</h2>
      {experience.map((info, i) => {
        return (
          <div key={info.id} className="formContainer">
            <div className="formHeader">
              <button onClick={() => changeIsShow(i)}>
                {info.companyName}
              </button>
              <button
                className="deleteForm"
                onClick={() => handleRemoveExperience(i)}
              >
                <i className="material-symbols-outlined">delete</i>
              </button>
            </div>
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
      <div className="addFormButton">
        <button onClick={handleAddExperience}>
          Add
          <i className="material-symbols-outlined">add</i>
        </button>
      </div>
    </div>
  );
}
