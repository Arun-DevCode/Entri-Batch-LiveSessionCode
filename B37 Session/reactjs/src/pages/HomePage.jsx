import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addStudent } from "../actions/features/student";

function HomePage() {
  // Retrieve data from global state/store
  const { name, password } = useSelector((state) => state.student);
  const [Name, setName] = useState("");

  //Dispatch declare
  const dispatch = useDispatch();

  function handleUpdateStudentForm(event) {
    event.preventDefault(); // against browser default
    try {
      //todo : to update state/store
      dispatch(addStudent(Name));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form onSubmit={handleUpdateStudentForm} className="flex flex-col">
        <input
          type="text"
          placeholder="Enter student name"
          onChange={(event) => setName(event.target.value)}
          className="border border-gray-200 px-4 py-2 rounded mb-3.5"
        />
        <button
          type="submit"
          className="bg-blue-500 py-1 rounded-sm text-white capitalize"
        >
          update state
        </button>
      </form>

      <div className="mt-12 bg-gray-100 p-24 rounded">
        <h1 className="font-light text-md mb-3.5">Live Update</h1>
        <ul>
          <li className="text-base">Username: {name}</li>
          <li className="text-base">Password : {password}</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
