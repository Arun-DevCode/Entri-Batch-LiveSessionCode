import React from "react";
import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="h-dvh bg-blue-500 text-white w-72">
      <h3>App Side Bar</h3>
      <Link to={"/admin/dashboard/overview"}>Overview</Link>
    </div>
  );
}

export default Sidebar;
