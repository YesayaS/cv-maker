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
            <button onClick={(e) => handleRemoveProfInfo(i)}>
              Remove ProfExp
            </button>
            <ul>
              <li>
                <label>Company
                <input
                  class="companyName"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.companyName}
                  data-key="companyName"
                /></label>
              </li>
              <li>
                <label>Job Title
                <input
                  class="jobTitle"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.jobTitle}
                  data-key="jobTitle"
                /></label>
              </li>
              <li>
                <label>Description
                <input
                  class="description"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.description}
                  data-key="description"
                /></label>
              </li>
              <li>
                <label>End Date
                <input
                  class="startDate"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.startDate}
                  data-key="startDate"
                /></label>
              </li>
              <li>
                <label>End Date
                <input
                  class="endDate"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.endDate}
                  data-key="endDate"
                /></label>
              </li>
            </ul>
          </div>
        );
      })}
      <button onClick={handleAddProfInfo}>Add +</button>
    </div>
  );
}
