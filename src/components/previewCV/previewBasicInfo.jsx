export function PreviewBasicInfo({info}) {
  const name = info.name;
  const email = info.email
  const phoneNumber = info.phoneNumber
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
}
