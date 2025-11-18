import React, { useEffect, useState } from "react";
import axiosConfig from "../config/axios.config";

function postpage() {
  const [todos, setTodos] = useState([]);

  //* To get all todos data
  async function getAllPosts() {
    const response = await axiosConfig.get("todos");
    const response2 = await axiosConfig.get("users");
    setTodos(response.data);
    console.table(response2.data);
  }

  //* Used to render after inital
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <ul>
              <li className="ml-5">{todo.title}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default postpage;
