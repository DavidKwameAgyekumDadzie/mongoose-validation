
const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const postRouter = require("./modules/post/post.route");


const app = express();
app.use(express.json());

app.get("/", (re, res) => {
    res.status(200).send("Welcome to my server. use/posts to get all ");
});
app.use("/posts", postRouter);
const start = async () => {
  await dbConnect();

  app.listen(4001, (err) => {
    console.log("Server running on http://localhost:4001");
  });
};
start()