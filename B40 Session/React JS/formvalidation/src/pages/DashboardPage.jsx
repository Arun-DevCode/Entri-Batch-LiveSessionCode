import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

function DashboardPage() {
  return (
    <section className="flex items-center">
      <SideBar />
      {/* Child Page Content */}
      <Outlet />
    </section>
  );
}

export default DashboardPage;
