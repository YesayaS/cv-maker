export function PreviewEduInfo({ info }) {
  const space = "\u00A0";
  return (
    <div className="pt-5">
      <h2 className="border-b-2 border-black text-lg">Education</h2>
      {info.map((edu) => {
        const id = edu.id;
        const degree = edu.degree;
        const school = edu.school;
        const startDate = edu.startDate;
        const endDate = edu.endDate;
        return (
          <div key={id}>
            <div className="flex justify-between font-semibold pt-2">
              <p>{school}</p>
              <div className="flex">
                <p>
                  {startDate} - {space}
                </p>
                <p> {endDate}</p>
              </div>
            </div>
            <p>{degree}</p>
          </div>
        );
      })}
    </div>
  );
}
