import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
function DashboardLayout() {
  return (
    <div className="flex items-center">
      <Sidebar />
      <section>
        
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;
