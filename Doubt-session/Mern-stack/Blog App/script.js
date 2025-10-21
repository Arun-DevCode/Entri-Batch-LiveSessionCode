const body = document.querySelector("body");
const blogList = document.createElement("div");

/*-------------- Styles Code Above -------------- */
/*
 style: Blog Card
 CSS Property : Object
*/

// BLog Card Design
const blogCardStyle = {
  border: "1px solid black",
  marginBottom: "10px",
  padding: "10px",
};

/*-------------- Styles Code Above -------------- */

// Todo : To get all blogs from mockapi
function getAllBlogs() {
  const response = fetch("https://68f724edf7fb897c6614a7f5.mockapi.io/blogs")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return response;
}

getAllBlogs().then((res) => {
  //Iterate : each response
  for (const blog of res) {
    // BLog Card Container
    const BlogCard = document.createElement("div");
    // Add styles to blogDetails
    for (const key in blogCardStyle) {
      BlogCard.style[key] = blogCardStyle[key];
    }

    // Rendering HTML
    BlogCard.innerHTML = `
    <h5>${blog.username}</h5>
    <div style="display:flex;align-items:center;">
      <div style="flex-grow:1">
        <img src=${blog.imageURL} alt=${blog.title} />
      </div>
      <div style="flex-grow:1">
        <h3>${blog.title}</h3>
        <p>${blog.description}</p>
        <div>
          <button name="likeCount">Like ${blog.likeCount} </button>
          <button name="dislikeCount">Dislike ${blog.dislikeCount}</button>
        </div>
      </div>
    </div>
    `;

    // Append a blogcard as child to blog list
    blogList.appendChild(BlogCard);
  }
});

// Appending blog card to the body as child
body.appendChild(blogList);

// Todo : To create a blog
function CreateBlog(blog) {
  const response = fetch("https://68f724edf7fb897c6614a7f5.mockapi.io/todo", {
    method: "POST",
    body: JSON.stringify(blog),
  })
    .then((res) => {
      return res.json();
    })
    .then((blogs) => {
      console.log(blogs);
    })
    .catch((err) => console.log(err));
}
