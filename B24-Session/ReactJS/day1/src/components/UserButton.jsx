import React from "react";

function UserButton({ name, type, classValue }) {
  return (
    <div>
      <button type={type} className={classValue}>
        {name}
      </button>
    </div>
  );
}

export default UserButton;
