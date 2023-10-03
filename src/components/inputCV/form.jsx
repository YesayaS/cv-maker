import { useState } from "react";

export function Form(data, handler) {
  const arrayStatus = [...Array(data.length).fill(false)];
  const [isShow, setIsShow] = useState(arrayStatus);

  function changeIsShow(i) {
    const updatedIsShow = [...isShow];
    updatedIsShow[i] = !updatedIsShow[i];
    setIsShow(updatedIsShow);
  }
  return (
    <div className="formContainer">
      <h2>Education Experience</h2>
    </div>
  );
}
