import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./actions/userSlice";

function App() {
  const state = useSelector((state) => state);
  // console.log(state.getState());

  const dispatch = useDispatch();

  function updateUserState() {
    dispatch(
      createUser({ email: "testuser@gmail.com", password: "testuser@2025" })
    );
  }

  return (
    <div>
      <h1>Welcome to Redux</h1>
      <button onClick={updateUserState}>Update User State</button>
    </div>
  );
}

export default App;
