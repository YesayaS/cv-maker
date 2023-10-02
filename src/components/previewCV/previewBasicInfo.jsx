export function PreviewBasicInfo({ info }) {
  const space = "\u00A0";
  const name = info.name ? info.name : space;
  const email = info.email ? info.email : "";
  const phoneNumber = info.phoneNumber ? info.phoneNumber : "";
  return (
    <div>
      <h1 className="text-center text-3xl">{name}</h1>
      <div className="flex justify-center">
        <p>{email}</p>
        {name && email ? space + "|" + space : space}
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
}
