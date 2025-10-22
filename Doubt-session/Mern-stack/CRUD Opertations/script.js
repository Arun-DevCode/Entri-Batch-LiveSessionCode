const API_URL = "https://68f724edf7fb897c6614a7f5.mockapi.io/blogs";
let editMode = false;

// Fetch and display all blogs
function fetchBlogs() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((blogs) => displayBlogs(blogs))
    .catch((error) => alert("Error fetching blogs: " + error.message));
}

// Display blogs
function displayBlogs(blogs) {
  const container = document.getElementById("blogsContainer");
  container.innerHTML = "";

  if (blogs.length === 0) {
    container.innerHTML = "<p>No blogs found.</p>";
    return;
  }

  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.style.border = "1px solid #ccc";
    blogDiv.style.padding = "15px";
    blogDiv.style.marginBottom = "15px";

    blogDiv.innerHTML = `
            <h3>${blog.title}</h3>
            <p><strong>By:</strong> ${blog.username}</p>
            <p>${blog.description}</p>
            <p><strong>Status:</strong> ${
              blog.completed ? "Completed" : "Not Completed"
            }</p>
            <p><strong>Likes:</strong> ${
              blog.likeCount || 0
            } | <strong>Dislikes:</strong> ${blog.dislikeCount || 0}</p>
            <p><strong>Date:</strong> ${new Date(
              blog.date
            ).toLocaleDateString()}</p>
            <img src="${blog.imageURL}" alt="${blog.title}" width="300"><br><br>
            <button onclick="editBlog('${blog.id}')">Edit</button>
            <button onclick="deleteBlog('${blog.id}')">Delete</button>
            <hr>
        `;

    container.appendChild(blogDiv);
  });
}

// Create or Update blog
document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const blogData = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    imageURL: document.getElementById("imageURL").value,
    username: document.getElementById("username").value,
    completed: document.getElementById("completed").checked,
    date: Date.now(),
    likeCount: 0,
    dislikeCount: 0,
  };

  if (editMode) {
    const id = document.getElementById("blogId").value;
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Blog updated successfully!");
        resetForm();
        fetchBlogs();
      })
      .catch((error) => alert("Error updating blog: " + error.message));
  } else {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Blog created successfully!");
        resetForm();
        fetchBlogs();
      })
      .catch((error) => alert("Error creating blog: " + error.message));
  }
});

// Edit blog
function editBlog(id) {
  fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((blog) => {
      document.getElementById("blogId").value = blog.id;
      document.getElementById("title").value = blog.title;
      document.getElementById("description").value = blog.description;
      document.getElementById("imageURL").value = blog.imageURL;
      document.getElementById("username").value = blog.username;
      document.getElementById("completed").checked = blog.completed;

      document.getElementById("formTitle").textContent = "Edit Blog";
      document.getElementById("submitBtn").textContent = "Update Blog";
      document.getElementById("cancelBtn").style.display = "inline";

      editMode = true;
      window.scrollTo(0, 0);
    })
    .catch((error) => alert("Error loading blog: " + error.message));
}

// Delete blog
function deleteBlog(id) {
  if (!confirm("Are you sure you want to delete this blog?")) return;

  fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then(() => {
      alert("Blog deleted successfully!");
      fetchBlogs();
    })
    .catch((error) => alert("Error deleting blog: " + error.message));
}

// Reset form
function resetForm() {
  document.getElementById("blogForm").reset();
  document.getElementById("blogId").value = "";
  document.getElementById("formTitle").textContent = "Create New Blog";
  document.getElementById("submitBtn").textContent = "Create Blog";
  document.getElementById("cancelBtn").style.display = "none";
  editMode = false;
}

// Initial load
fetchBlogs();
