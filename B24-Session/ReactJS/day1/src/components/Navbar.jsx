import React from "react";

function Navbar() {
  return (
    <header className="bg-background-primary p-4 shadow font-primary">
      <nav className="flex justify-between md:mx-auto md:max-w-[80%] items-center">
        {/* Logo */}
        <div className="flex space-x-4">
          <div>
            <img
              src="src\assets\images\Applogo.png"
              className="w-28"
              alt="Viatours"
            />
          </div>
          {/* Menu list */}
          <ul className="md:flex space-x-2.5 text-md hidden">
            <li className="text-md text-orange-500">Home</li>
            <li className="text-md">Tour</li>
            <li className="text-md">Destination</li>
            <li className="text-md">Activities</li>
            <li className="text-md">Pages</li>
            <li className="text-md">Contact</li>
          </ul>
        </div>
        {/* user actions */}
        <div className="md:flex space-x-2.5 hidden">
          <button className="text-md">USD</button>
          <button className="text-md">Help</button>
          <button className="text-md">Sign up</button>
          <button className="text-md border border-gray-500 rounded-full px-4 py-1.5">
            Log in
          </button>
        </div>

        {/*Mobile Menu Bar*/}
        <div className="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
