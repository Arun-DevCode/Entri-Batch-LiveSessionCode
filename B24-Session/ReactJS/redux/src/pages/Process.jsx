import { useState } from "react";
import { Outlet, Link } from "react-router";
import { useLocation } from "react-router";

function Process() {
  const { pathname } = useLocation();
  const isCurrentPath = pathname.includes("/personal-information");
  console.log(isCurrentPath);

  return (
    <div>
      <h1>Job Application Process</h1>
      <div className="my-5 bg-white shadow-lg rounded-lg flex justify-center items-center h-72">
        <Outlet />
      </div>
      <div style={{ display: "flex", gap: "12px", marginBlock: "24px" }}>
        {isCurrentPath ? null : (
          <Link to={"/dashboard/personal-information"}>
            <button
              disabled={isCurrentPath}
              className="bg-black px-4 py-2 rounded-md text-white text-center"
            >
              Back
            </button>
          </Link>
        )}
        <Link to={"/dashboard/Upload-documents"}>
          <button className="bg-black px-4 py-2 rounded-md text-white text-center">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Process;
