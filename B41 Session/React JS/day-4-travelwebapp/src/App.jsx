import React from "react";

function App() {
  const users = [
    {
      id: 1,
      name: "Test User",
      role: "Full Stack Engineer",
      exp: 5,
    },
    {
      id: 2,
      name: "Test User",
      role: "Full Stack Engineer",
      exp: 5,
    },
    { id: 3, name: "Test User", role: "Full Stack Engineer", exp: 5 },
    { id: 4, name: "Test User", role: "Full Stack Engineer", exp: 5 },
    { id: 5, name: "Test User", role: "Full Stack Engineer", exp: 5 },
  ];

  return (
    <div>
      {/* List with Return Statement */}
      {/* {users.map((user) => {
        return (
          <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
            <span>{user.exp}</span>
          </div>
        );
      })} */}

      {/* List With Expression */}
      {users.map((user,index) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.role}</p>
          <span>{user.exp}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
