import InvTrackSidebar from "../components/Sidebar";
import { Outlet } from "react-router";

function Dashboard() {
  return (
    <div className="flex space-x-12 h-dvh">
      <InvTrackSidebar />
      <div className="h-full flex justify-center items-center w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
