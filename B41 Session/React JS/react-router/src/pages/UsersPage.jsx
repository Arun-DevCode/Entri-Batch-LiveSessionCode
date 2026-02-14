import { useLoaderData, Link } from "react-router";

function UsersPage() {
  const users = useLoaderData(); // {error : false , data : data}
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="flex items-center space-x-3.5 ">
            <h3>{user.name}</h3>
            <Link
              to={`/user/details/${user.id}`}
              className="bg-blue-500 px-1.5 text-white py-1"
            >
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default UsersPage;
