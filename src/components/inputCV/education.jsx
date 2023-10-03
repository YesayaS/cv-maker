import { useState } from "react";
import { EducationForm } from "./educationForm";

export function Education({ education, handlers }) {
  const arrayStatus = [...Array(education.length).fill(false)];
  const [isShow, setIsShow] = useState(arrayStatus);

  function changeIsShow(i) {
    const updatedIsShow = [...isShow];
    updatedIsShow[i] = !updatedIsShow[i];
    setIsShow(updatedIsShow);
  }

  const { handleEducation, handleAddEducation, handleRemoveEducation } =
    handlers;
  const onChange = handleEducation;
  return (
    <div className="sectionContainer">
      <h2>Education Experience</h2>
      {education.map((info, i) => {
        return (
          <div key={info.id} className="formContainer">
            <div className="formHeader">
              <button onClick={() => changeIsShow(i)}> {info.school}</button>
              <button
                className="deleteForm"
                onClick={() => handleRemoveEducation(i)}
              >
                <i className="material-symbols-outlined">delete</i>
              </button>
            </div>
            {!isShow[i] ? null : (
              <EducationForm
                info={info}
                onChange={onChange}
                i={i}
              ></EducationForm>
            )}
          </div>
        );
      })}
      <div className="addFormButton">
        <button onClick={handleAddEducation}>
          Add
          <i className="material-symbols-outlined addIcon">add</i>
        </button>
      </div>
    </div>
  );
}
