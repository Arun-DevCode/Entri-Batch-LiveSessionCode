import React from "react";

const users = [
  { id: 1, name: "user 1", role: "Junior Developer" },
  { id: 2, name: "Prakash", role: "Senior Developer", exp: 5 },
  { id: 3, name: "user 3", role: "Expert Developer" },
  { id: 4, name: "user 4", role: "UI/Ux Designer" },
  { id: 5, name: "Kumar", role: "Data Science Engineer" },
];

function UsersList() {
  // Event Hanlder
  function handleEvent(userData) {
    console.log("Event Triggered!");
    console.log("User Data : ", userData);
  }

  return (
    <div>
      <div>
        {users.map((user, index) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.role}</p>
            <button
              onClick={() => handleEvent(user)}
              className="bg-blue-500 rounded-lg cursor-pointer text-center px-5 py-2 text-white"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
