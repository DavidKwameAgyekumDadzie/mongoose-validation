const Post = require("./post.model");

exports.getAllPost = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json({ posts })
};

exports.createPost = async (req, res) => {
  const { title,body, pulish } = req.body;

  const post = await Post.create({
    title,
    body,
    pulish,
  });

  res.status(201).json({ post });
};