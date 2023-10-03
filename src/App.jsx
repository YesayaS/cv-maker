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

  const [basicInfo, setBasicInfo] = useState(deepCopy(templateData.basicInfo));
  const [educationInfo, setEducationInfo] = useState([
    deepCopy(templateData.educationInfo),
  ]);
  const [professionalInfo, setProfessionalInfo] = useState([
    deepCopy(templateData.professionalInfo),
  ]);

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
    const templateInfo = deepCopy(templateData.educationInfo);
    templateInfo.id = uniqid();
    const newEducationInfo = [...educationInfo, templateInfo];
    setEducationInfo(newEducationInfo);
  }

  function handleRemoveEdu(i) {
    const updatedEduInfo = [...educationInfo];
    updatedEduInfo.splice(i, 1);
    console.log(updatedEduInfo);
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
    const templateInfo = deepCopy(templateData.professionalInfo);
    templateInfo.id = uniqid();
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
      <div className="flex justify-center">
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
