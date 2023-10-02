export function EducationInfo({ educationInfo, eduHandlers }) {
  const { handleEducationInfo, handleAddEdu, handleRemoveEdu } = eduHandlers;
  const onChange = handleEducationInfo;
  return (
    <div>
      <h1>Education Experience</h1>
      {educationInfo.map((info, i) => {
        return (
          <div className="edu-form" key={info.id}>
            <button onClick={(e) => handleRemoveEdu(i)}>Remove Edu</button>
            <ul>
              <li>
                <label >Degree
                <input
                  class="degree"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.degree}
                  data-key="degree"
                /></label>
              </li>
              <li>
                <label >School
                <input
                  class="school"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.school}
                  data-key="school"
                /></label>
              </li>
              <li>
                <label >Start
                <input
                  class="startDate"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.startDate}
                  data-key="startDate"
                /></label>
              </li>
              <li>
                <label >End
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
      <button onClick={handleAddEdu}>Add +</button>
    </div>
  );
}
