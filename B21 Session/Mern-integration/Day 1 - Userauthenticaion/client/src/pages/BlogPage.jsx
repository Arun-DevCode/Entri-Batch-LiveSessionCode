import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch("http://localhost:3000/get-all-blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    alert("Navigate to create blog page");
    console.log("Create new blog clicked");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
          <Link to={"/create-blog"}>
            <button
              onClick={handleCreate}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Create Blog
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={blog.imageurl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
