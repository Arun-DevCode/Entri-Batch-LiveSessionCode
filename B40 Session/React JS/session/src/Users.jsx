import axios from "axios";
import { useEffect, useState } from "react";


function Users() {
  const [users, setUser] = useState([]);
  console.log("Component Mounted into html");
  // Declare useEffect
  useEffect(() => {
    getAllUsers();
  }, []);

  // Get all users form json
  async function getAllUsers() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json(); // parse -> object
    console.table(res.data);
    // update to state
    // setUser(data);
    console.log("Component Mounted into htmls");
  }
  return (
    <>
      <div>{}</div>
    </>
  );
}

export default Users;
