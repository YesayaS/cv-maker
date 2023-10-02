export function PreviewEduInfo({ info }) {
  return (
    <div>
      {info.map((edu) => {
        const id = edu.id;
        const degree = edu.degree;
        const school = edu.school;
        const startDate = edu.startDate;
        const endDate = edu.endDate;
        return (
          <div key={id}>
            <p>{degree}</p>
            <p>{school}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
          </div>
        );
      })}
    </div>
  );
}
