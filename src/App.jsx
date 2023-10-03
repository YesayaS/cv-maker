import { useState } from "react";
import "./App.css";
import { InputCV } from "./components/inputCV/inputCV";
import { PreviewCV } from "./components/previewCV/previewCV";
import { templateData } from "./templateData";
import uniqid from "uniqid";

function App() {
  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  const [basic, setBasic] = useState(deepCopy(templateData.basic));
  const [education, setEducation] = useState([
    deepCopy(templateData.education),
  ]);
  const [experience, setExperience] = useState([
    deepCopy(templateData.experience),
  ]);

  function handleBasic(e) {
    const { key } = e.target.dataset;
    setBasic({ ...basic, [key]: e.target.value });
  }

  function handleExperience(e, i) {
    const key = e.target.dataset.key;
    const inputValue = e.target.value;
    const updatedExperience = [...experience];
    updatedExperience[i][key] = inputValue;
    setExperience(updatedExperience);
  }

  function handleAddExperience() {
    const templateInfo = deepCopy(templateData.experience);
    templateInfo.id = uniqid();
    const updatedExperience = [...experience, templateInfo];
    setExperience(updatedExperience);
  }

  function handleRemoveExperience(i) {
    const updatedExperience = [...experience];
    updatedExperience.splice(i, 1);
    setExperience(updatedExperience);
  }

  function handleEducation(e, i) {
    const key = e.target.dataset.key;
    const inputValue = e.target.value;
    const updatedEducation = [...education];
    updatedEducation[i][key] = inputValue;
    setEducation(updatedEducation);
  }

  function handleAddEducation() {
    const templateInfo = deepCopy(templateData.education);
    templateInfo.id = uniqid();
    const updatedEducation = [...education, templateInfo];
    setEducation(updatedEducation);
  }

  function handleRemoveEducation(i) {
    const updatedEducation = [...education];
    updatedEducation.splice(i, 1);
    console.log(updatedEducation);
    setEducation(updatedEducation);
  }

  const educationHandlers = {
    handleEducation: handleEducation,
    handleAddEducation: handleAddEducation,
    handleRemoveEducation: handleRemoveEducation,
  };
  const experienceHandlers = {
    handleExperience: handleExperience,
    handleAddExperience: handleAddExperience,
    handleRemoveExperience: handleRemoveExperience,
  };
  return (
    <>
      <div className="flex justify-center">
        <InputCV
          basic={basic}
          education={education}
          experience={experience}
          handleBasic={handleBasic}
          educationHandlers={educationHandlers}
          experienceHandlers={experienceHandlers}
        ></InputCV>
        <PreviewCV
          basic={basic}
          education={education}
          experience={experience}
        ></PreviewCV>
      </div>
    </>
  );
}

export default App;
