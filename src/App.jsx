import { useState } from "react";
import "./App.css";
import "./components/inputCV";
import "./components/previewCV";
import "./templateData";
import { InputCV } from "./components/inputCV";
import { PreviewCV } from "./components/previewCV";
import { templateData } from "./templateData";

function App() {
  const [basicInfo, setBasicInfo] = useState(templateData.basicInfo);
  const [educationInfo, setEducationInfo] = useState(templateData.educationInfo);
  const [professionalInfo , setProfessionalInfo] = useState(templateData.professionalInfo);

  function handleBasicInfo(e) {
    const { key } = e.target.dataset;
    setBasicInfo({ ...basicInfo, [key]: e.target.value });
  }
  function handleEducationInfo(e){
    const { key } = e.target.dataset;
    setEducationInfo({ ...educationInfo, [key]: e.target.value });
  }
  function handleProfessionalInfo(e){
    const { key } = e.target.dataset;
    setProfessionalInfo({ ...professionalInfo, [key]: e.target.value })
  }
  return (
    <>
      <div className="app">
        <InputCV basicInfo={basicInfo} educationInfo={educationInfo} professionalInfo={professionalInfo}  handleBasicInfo={handleBasicInfo} handleEducationInfo={handleEducationInfo} handleProfessionalInfo={handleProfessionalInfo}></InputCV>
        <PreviewCV></PreviewCV>
      </div>
    </>
  );
}

export default App;
