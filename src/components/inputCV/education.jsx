export function Education({ education, handlers }) {
  const { handleEducation, handleAddEducation, handleRemoveEducation } =
    handlers;
  const onChange = handleEducation;
  return (
    <div className="formContainer">
      <h2>Education Experience</h2>
      {education.map((info, i) => {
        return (
          <div className="edu-form" key={info.id}>
            <button onClick={() => handleRemoveEducation(i)}>Remove Edu</button>
            <ul>
              <li>
                <label>Degree</label>
                <br />
                <input
                  className="degree"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.degree}
                  data-key="degree"
                />
              </li>
              <li>
                <label>School</label>
                <br />
                <input
                  className="school"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.school}
                  data-key="school"
                />
              </li>
              <li>
                <label>Start</label>
                <br />
                <input
                  className="startDate"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.startDate}
                  data-key="startDate"
                />
              </li>
              <li>
                <label>End</label>
                <br />
                <input
                  className="endDate"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.endDate}
                  data-key="endDate"
                />
              </li>
            </ul>
          </div>
        );
      })}
      <button onClick={handleAddEducation}>Add +</button>
    </div>
  );
}
