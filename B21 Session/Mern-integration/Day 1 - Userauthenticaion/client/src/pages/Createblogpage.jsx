import { useState } from "react";

export default function CreateBlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    imageurl: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch("http://localhost:3000/create-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      const data = await response.json();
      console.log("Blog created:", data);
      alert("Blog created successfully!");

      // Reset form
      setFormData({
        title: "",
        imageurl: "",
        desc: "",
        userId: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create blog");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Blog</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              name="imageurl"
              value={formData.imageurl}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Enter blog description"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Create Blog
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Back to All Blogs
          </a>
        </p>
      </div>
    </div>
  );
}
