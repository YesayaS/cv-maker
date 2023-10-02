export function PreviewProfInfo({ info }) {
    return (
      <div>
        {info.map((prof) => {
          const id = prof.id;
          const companyName = prof.companyName;
          const jobTitle = prof.jobTitle;
          const description = prof.description
          const startDate = prof.startDate;
          const endDate = prof.endDate;
          return (
            <div key={id}>
              <p>{companyName}</p>
              <p>{jobTitle}</p>
              <p>{description}</p>
              <p>{startDate}</p>
              <p>{endDate}</p>
            </div>
          );
        })}
      </div>
    );
  }
  