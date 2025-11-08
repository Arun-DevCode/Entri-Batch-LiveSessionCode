import React from "react";

function UserInput({ placeholder, typeValue }) {
  return <input type={typeValue} placeholder={placeholder} required />;
}

export default UserInput;
