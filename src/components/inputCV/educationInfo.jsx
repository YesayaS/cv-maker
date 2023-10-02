export function EducationInfo({ educationInfo, onChange, onClick }) {
  return (
    <div>
      <h1>Education Experience</h1>
      {educationInfo.map((info, i) => {
        return (
          <div className="edu-form" key={info.id}>
            <ul>
              <li>
                <label htmlFor="degree">Degree</label>
                <input
                  id="degree"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.degree}
                  data-key="degree"
                />
              </li>
              <li>
                <label htmlFor="school">School</label>
                <input
                  id="school"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.school}
                  data-key="school"
                />
              </li>
              <li>
                <label htmlFor="startDate">Start</label>
                <input
                  id="startDate"
                  type="text"
                  onChange={(e) => onChange(e, i)}
                  value={info.startDate}
                  data-key="startDate"
                />
              </li>
              <li>
                <label htmlFor="endDate">End</label>
                <input
                  id="endDate"
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
      <button onClick={onClick}>Add +</button>
    </div>
  );
}
