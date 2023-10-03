export function Basic({ basic, handlers }) {
  const name = basic.name;
  const email = basic.email;
  const phone = basic.phoneNumber;
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
            onChange={handlers}
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
            onChange={handlers}
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
            onChange={handlers}
            value={phone}
            data-key="phoneNumber"
          />
        </li>
      </ul>
    </div>
  );
}
