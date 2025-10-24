import React, { useState } from "react";

export default function themePage() {
  const [theme, setTheme] = useState("light");
  return (
    <section
      className={`flex justify-center items-center min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white"
      }`}
    >
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold">Welcome to Theme page</h1>
        <p className="max-w-sm my-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab blanditiis
          magni, quod aliquid illo est id, commodi eveniet suscipit mollitia et.
          Obcaecati soluta accusantium placeat? Enim modi alias nisi quasi!
        </p>
        <button
          onClick={() => setTheme("dark")}
          className={`px-5 py-2 rounded font-medium ${
            theme === "dark" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`px-5 py-2 rounded font-medium ml-2 ${
            theme === "dark" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          light
        </button>
      </div>
    </section>
  );
}
