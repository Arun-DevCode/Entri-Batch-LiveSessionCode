import React from "react";

export default function Two(props) {
  
  return (
    <div>
      <h1>{props.profileName}</h1>
      <p>{props.role || "Full Stack Developer"}</p>
      <h1>Welcome to Child Component</h1>
    </div>
  );
}
