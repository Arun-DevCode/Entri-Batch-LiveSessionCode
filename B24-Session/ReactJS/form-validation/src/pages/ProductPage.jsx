import React from "react";
import { Outlet, useNavigate } from "react-router";

function ProductPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to product page</h1>
      <button
        onClick={() => navigate(-1)}
        className="bg-emerald-500 cursor-pointer rounded text-white text-center"
      >
        Back
      </button>
      <Outlet />
    </div>
  );
}

export default ProductPage;
