export function ExperienceForm({ info, onChange, i }) {
  return (
    <>
      <ul className="formBorder">
        <li>
          <label>Company</label>
          <br />
          <input
            className="companyName"
            type="text"
            onChange={(e) => onChange(e, i)}
            value={info.companyName}
            data-key="companyName"
          />
        </li>
        <li>
          <label>Job Title</label>
          <br />
          <input
            className="jobTitle"
            type="text"
            onChange={(e) => onChange(e, i)}
            value={info.jobTitle}
            data-key="jobTitle"
          />
        </li>
        <li>
          <label>Description</label>
          <br />
          <input
            className="description"
            type="text"
            onChange={(e) => onChange(e, i)}
            value={info.description}
            data-key="description"
          />
        </li>
        <li>
          <label>End Date</label>
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
          <label>End Date</label>
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
    </>
  );
}
