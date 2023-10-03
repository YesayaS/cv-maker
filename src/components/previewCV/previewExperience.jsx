export function PreviewExperience({ info }) {
  const space = "\u00A0";
  return (
    <div>
      <h2 className="border-b-2 border-black text-lg">Experience</h2>
      {info.map((prof) => {
        const id = prof.id;
        const companyName = prof.companyName;
        const jobTitle = prof.jobTitle;
        const description = prof.description;
        const startDate = prof.startDate;
        const endDate = prof.endDate;
        return (
          <div key={id}>
            <div className="flex justify-between pt-2 font-semibold">
              <p>{companyName}</p>
              <div className="flex">
                <p>
                  {startDate} - {space}
                </p>
                <p> {endDate}</p>
              </div>
            </div>
            <p>{jobTitle}</p>
            <p className="pl-2">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
