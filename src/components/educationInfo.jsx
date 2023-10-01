export function EducationInfo({ educationInfo, onChange }) {
    const degree = educationInfo.degree
    const school = educationInfo.school
    const startDate = educationInfo.startDate
    const endDate = educationInfo.endDate
    const key = educationInfo.key
  return (
    <div key={key}>
      <h1>Education Experience</h1>
      <ul>
        <li>
          <label htmlFor="schoolTitle">Degree</label>
          <input id="schoolTitle" type="text" onChange={onChange} value={degree} data-key="degree" />
        </li>
        <li>
          <label htmlFor="schoolName">School</label>
          <input id="schoolName" type="text" onChange={onChange} value={school} data-key="sxhool" />
        </li>
        <li>
          <label htmlFor="startDate">Start</label>
          <input id="startDate" type="text" onChange={onChange} value={startDate} data-key="startDate" />
        </li>
        <li>
          <label htmlFor="endDate">End</label>
          <input id="endDate" type="text" onChange={onChange} value={endDate} data-key="endDate" />
        </li>
      </ul>
    </div>
  );
}
