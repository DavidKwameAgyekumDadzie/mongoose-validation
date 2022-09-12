const router = require("express").Router

const {
    createPost,  getAllPost
} = require("../post/post.controller");

const postRouter = router();

postRouter.route("/").get(getAllPost).post(createPost);

module.exports = postRouter;