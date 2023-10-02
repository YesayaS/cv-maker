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

  function handleAddEdu() {
    const id = uniqid();
    const templateInfo = {
      degree: "Bachelor of Science",
      school: "London University",
      startDate: "09/2021",
      endDate: "09/2022",
      id: id,
    };
    const newEducationInfo = [...educationInfo, templateInfo];
    setEducationInfo(newEducationInfo);
  }

  function handleRemoveEdu(i) {
    const updatedEduInfo = [...educationInfo];
    updatedEduInfo.splice(i, 1);
    setEducationInfo(updatedEduInfo);
  }

  function handleProfessionalInfo(e, i) {
    const key = e.target.dataset.key;
    const inputValue = e.target.value;
    const updatedProfInfo = [...professionalInfo];
    updatedProfInfo[i][key] = inputValue;
    setProfessionalInfo(updatedProfInfo);
  }

  function handleAddProfInfo() {
    const templateInfo = {
      companyName: "Example Inc",
      jobTitle: "Engineer",
      description: "description here",
      startDate: "09/2022",
      endDate: "current",
      id: uniqid(),
    };
    const updatedProfInfo = [...professionalInfo, templateInfo];
    setProfessionalInfo(updatedProfInfo);
  }

  function handleRemoveProfInfo(i) {
    const updatedProfInfo = [...professionalInfo];
    updatedProfInfo.splice(i, 1);
    setProfessionalInfo(updatedProfInfo);
  }

  const eduHandlers = {
    handleEducationInfo: handleEducationInfo,
    handleAddEdu: handleAddEdu,
    handleRemoveEdu: handleRemoveEdu,
  };
  const profHandlers = {
    handleProfessionalInfo: handleProfessionalInfo,
    handleAddProfInfo: handleAddProfInfo,
    handleRemoveProfInfo: handleRemoveProfInfo,
  };
  return (
    <>
      <div className="app">
        <InputCV
          basicInfo={basicInfo}
          educationInfo={educationInfo}
          professionalInfo={professionalInfo}
          handleBasicInfo={handleBasicInfo}
          eduHandlers={eduHandlers}
          profHandlers={profHandlers}
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
