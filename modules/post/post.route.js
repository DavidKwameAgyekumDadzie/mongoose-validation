const router = require("express").Router

const {
    createPost,  
    getAllPost, 
    deletePost,
    getSinglePost,
    updatePost,
} = require("../post/post.controller");

const postRouter = router();

postRouter.route("/").get(getAllPost).post(createPost);
postRouter
.route("/:postId")
.get(getSinglePost)
.patch(updatePost)
.delete(deletePost);

module.exports = {postRouter};