const express = require("express");
const router = express.Router();


const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");


//Mapping Create

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);

//export
module.exports = router;
