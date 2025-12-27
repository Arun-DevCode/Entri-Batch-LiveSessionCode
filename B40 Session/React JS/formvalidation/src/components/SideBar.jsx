import { Link } from "react-router";
import { Database } from "lucide-react";

function SideBar() {
  const Pages = [
    {
      name: "overview",
      path: "/dashboard-page/overview",
      icons: Database,
    },
    {
      name: "register",
      path: "/dashboard-page/Register",
      icons: Database,
    },
  ];
  return (
    <div className="bg-white  border border-gray-200 shadow w-64 h-dvh">
      {Pages.map((route) => {
        return (
          <Link to={route.name} className="flex space-x-2 items-center">
            <route.icons size={16} />
            <h3>{route.name}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
