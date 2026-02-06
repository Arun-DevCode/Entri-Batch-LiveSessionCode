import React, { useState } from "react";

function Notification() {
  const [formData, setFormData] = useState({
    name: "Default Name",
    email: "Default Email",
    password: "Default Password",
  });

  // To update count
  function updateCount() {
    console.log(formData);
  }

  // To collect input value
  // Two way data binding
  function InputChange(event) {
    // Update logic
    const name = event.target.name;
    const value = event.target.value;
    // formData[event.target.name] = event.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <div>
      <div>
        <h1>{formData.name}</h1>
        <p>{formData.email}</p>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={(e) => InputChange(e)}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={(e) => InputChange(e)}
      />
      <button onClick={updateCount}>Submit</button>
    </div>
  );
}

export default Notification;
