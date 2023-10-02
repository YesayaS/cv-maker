export function BasicInfo({ basicInfo, onChange }) {
  const name = basicInfo.name;
  const email = basicInfo.email;
  const phone = basicInfo.phoneNumber;
  return (
    <div>
      <h1>Basic Information</h1>
      <ul>
        <li>
          <label htmlFor="name">Full Name</label>
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
