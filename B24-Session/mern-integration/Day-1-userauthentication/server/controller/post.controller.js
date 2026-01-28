function getAllPost(req,res) {
  return res.json({
    error: false,
    message: "fetched all posts",
    posts: [{ title: "Have a great dream", author: "Test user" }],
  });
}

export default getAllPost;
