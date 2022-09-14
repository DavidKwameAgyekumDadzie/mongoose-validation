const Post = require("./post.model");

exports.getAllPost = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json({ posts })
};

exports.createPost = async (req, res) => {
  const { title,body } = req.body;

  const post = await Post.create({
    title,
    body,

  });

  res.status(201).json({ post });
};

exports.getSinglePost = async (req, res) => {
  //const postId = req.params.postId; or 
  const { postId } = req.params;

  const post = await Post.findById(postId);
  //when the name and the value are the same write one
  // res.status(200).json({ post: post});
  res.status(200).json({ post});
};
exports.updatePost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findByIdAndUpdate(postId, 
    {...req.body },
    { new: true });
    res.status(200).json({ post });
};

exports.deletePost = async (req, res) => {
  const { postId } = req.params;
  await Post.findByIdAndDelete(postId);
  //the proper delete is 206 but the msg wont come to the frontend for the user to see. but when the 200 is use u can add a msg
  //res.status(206)
  res.status(200).json({ msg: "Post deleted successfully" });
};