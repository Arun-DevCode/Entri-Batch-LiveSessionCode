import React from "react";
import UserProfileCard from "./UserProfileCard";

function Profile() {
  // React Function For : update count then UI also
  const [employee, setEmployee] = React.useState({
    name: "Guest User",
    role: "Developer",
    experience: "1 year",
  }); // Object

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);
    setEmployee({ ...employee, [name]: value }); // Two way data binding
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted!");
    console.log(employee);
  }

  return (
    <div>
      <h3>Welcome to React Hooks({name})</h3>
      <form>
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            flexDirection: "column",
            width: "250px",
            gap: "12px",
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            name="role"
            type="text"
            placeholder="Role"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleFormSubmit}>Update Username</button>
      </form>
      <div style={{ marginTop: "16px" }}>
        <UserProfileCard employeeData={employee} />
      </div>
    </div>
  );
}

export default Profile;
