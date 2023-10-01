export function ProfessionalInfo(professionalInfo, onChange){
    return(
        <div>
        <h1>Professional Experience</h1>
        <li>
          <label htmlFor="companyName">Company</label>
          <input id="companyName" type="text" />
        </li>
        <li>
          <label htmlFor="jobTitlke">Job Title</label>
          <input id="jobTitlke" type="text" />
        </li>
        <li>
          <label htmlFor="">Description</label>
          <input id="" type="text" />
        </li>
        <li>
          <label htmlFor="">Date</label>
          <input id="" type="text" />
        </li>
      </div>
    )
}