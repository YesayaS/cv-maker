export function EducationForm({ isShow, info, onChange, i }) {
  return (
    <div className={`formBorder ${isShow ? "visible" : ""}`}>
      <ul>
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
          <label>Description</label>
          <br />
          <textarea
            className="description"
            type="text"
            onChange={(e) => onChange(e, i)}
            value={info.description}
            data-key="description"
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
}
