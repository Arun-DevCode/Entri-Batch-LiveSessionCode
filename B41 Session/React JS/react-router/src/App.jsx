import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <h1 className="text-4xl text-blue-500 font-bold text-center my-5">
        Welcome to List & Events
      </h1>

      {/* User List */}
      <div className="flex justify-center items-center">
        <UsersList />
      </div>
    </div>
  );
}

export default App;
