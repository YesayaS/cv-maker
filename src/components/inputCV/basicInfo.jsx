export function BasicInfo({ basicInfo, onChange }) {
  const name = basicInfo.name;
  const email = basicInfo.email;
  const phone = basicInfo.phoneNumber;
  return (
    <div className="formContainer">
      <h2>Basic Information</h2>
      <ul>
        <li>
          <label htmlFor="name">Full Name</label>
          <br />
          <input
            id="name"
            type="text"
            onChange={onChange}
            value={name}
            data-key="name"
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            onChange={onChange}
            value={email}
            data-key="email"
          />
        </li>
        <li>
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            id="phone"
            type="tel"
            onChange={onChange}
            value={phone}
            data-key="phoneNumber"
          />
        </li>
      </ul>
    </div>
  );
}
