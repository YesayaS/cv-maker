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
    <div className="formContainer">
      <h2>Education Experience</h2>
      {education.map((info, i) => {
        return (
          <div key={info.id}>
            <button onClick={() => changeIsShow(i)}> {info.school}</button>
            <button onClick={() => handleRemoveEducation(i)}>Remove Edu</button>
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
      <button onClick={handleAddEducation}>Add +</button>
    </div>
  );
}
