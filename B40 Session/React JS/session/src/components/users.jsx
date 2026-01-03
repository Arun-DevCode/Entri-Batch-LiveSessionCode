import UsersView from "./userview";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, updateUser } from "../features/slices/userslice";

function users() {
  // Dispatch declare
  const dispatch = useDispatch();

  console.log();

  // Retrievel

  function CreateUserAccount() {
    dispatch(
      addNewUser({
        name: "Test User",
        email: "testuser@gmail.com",
        password: "testuser@2025",
      })
    );
  }

  const state = useSelector((state) => state.Users);
  console.log(state);
  return (
    <section className="flex flex-col gap-y-5 justify-center items-center h-dvh">
      <div className="flex items-stretch">
        <input
          type="text"
          placeholder="Enter Your name"
          className="w-72 border border-gray-200 px-4 py-2 focus:outline-none rounded-lg mr-5 focus:border-blue-500"
        />
        <button
          onClick={CreateUserAccount}
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-4 py-2.5 rounded-lg text-white text-center"
        >
          Add User
        </button>
      </div>

      <div className="self-center">
        <UsersView />
      </div>
    </section>
  );
}

export default users;
