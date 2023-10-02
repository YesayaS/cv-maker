export function ProfessionalInfo({ professionalInfo, handlers }) {
  const { handleProfessionalInfo, handleAddProfInfo, handleRemoveProfInfo } =
    handlers;
  const onChange = handleProfessionalInfo;
  return (
    <div>
      <h1>Professional Experience</h1>
      {professionalInfo.map((info, i) => {
        return (
          <div key={info.id}>
            <button onClick={(e) => handleRemoveProfInfo(i)}>Remove ProfExp</button>
            <ul>
              <li>
                <label htmlFor="companyName">Company</label>
                <input id="companyName" type="text" onChange={(e) => onChange(e, i)}
                  value={info.companyName}
                  data-key="companyName"/>
              </li>
              <li>
                <label htmlFor="jobTitle">Job Title</label>
                <input id="jobTitle" type="text" onChange={(e) => onChange(e, i)}
                  value={info.jobTitle}
                  data-key="jobTitle"/>
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <input id="description" type="text" onChange={(e) => onChange(e, i)}
                  value={info.description}
                  data-key="description"/>
              </li>
              <li>
                <label htmlFor="startDate">End Date</label>
                <input id="startDate" type="text" onChange={(e) => onChange(e, i)}
                  value={info.startDate}
                  data-key="startDate"/>
              </li>
              <li>
                <label htmlFor="endDate">End Date</label>
                <input id="endDate" type="text" onChange={(e) => onChange(e, i)}
                  value={info.endDate}
                  data-key="endDate"/>
              </li>
            </ul>
          </div>
        );
      })}
      <button onClick={handleAddProfInfo}>Add +</button>
    </div>
  );
}
