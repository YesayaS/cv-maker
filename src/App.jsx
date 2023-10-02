import { useState } from "react";
import "./App.css";
import { InputCV } from "./components/inputCV/inputCV";
import { PreviewCV } from "./components/previewCV/previewCV";
import { templateData } from "./templateData";
import uniqid from "uniqid";

function App() {
  const [basicInfo, setBasicInfo] = useState(templateData.basicInfo);
  const [educationInfo, setEducationInfo] = useState(
    templateData.educationInfo,
  );
  const [professionalInfo, setProfessionalInfo] = useState(
    templateData.professionalInfo,
  );

  function handleBasicInfo(e) {
    const { key } = e.target.dataset;
    setBasicInfo({ ...basicInfo, [key]: e.target.value });
  }
  function handleEducationInfo(e, i) {
    const key = e.target.dataset.key;
    const inputValue = e.target.value;
    const updatedEducationInfo = [...educationInfo];
    updatedEducationInfo[i][key] = inputValue;
    setEducationInfo(updatedEducationInfo);
  }
  function handleProfessionalInfo(e, i) {
    const key = e.target.dataset.key;
    const inputValue = e.target.value;
    const updatedProfessionalInfo = [...professionalInfo];
    updatedProfessionalInfo[i][key] = inputValue;
    setProfessionalInfo(updatedEducationInfo);
  }
  function handleAddEdu(){
    const id = uniqid()
    const templateInfo = {
      degree: "Bachelor of Science",
      school: "London University",
      startDate: "09/2021",
      endDate: "09/2022",
      id: id,
    }
    const newEducationInfo = [...educationInfo, templateInfo]
    setEducationInfo(newEducationInfo)
  }
  return (
    <>
      <div className="app">
        <InputCV
          basicInfo={basicInfo}
          educationInfo={educationInfo}
          professionalInfo={professionalInfo}
          handleBasicInfo={handleBasicInfo}
          handleEducationInfo={handleEducationInfo}
          handleProfessionalInfo={handleProfessionalInfo}
          handleAddEdu={handleAddEdu}
        ></InputCV>
        <PreviewCV
          basicInfo={basicInfo}
          educationInfo={educationInfo}
          professionalInfo={professionalInfo}
        ></PreviewCV>
      </div>
    </>
  );
}

export default App;
