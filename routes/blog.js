const express = require("express");
const router = express.Router();


const {createComment} = require("../controllers/CommentController");



//Mapping Create

router.post("/comments/create", createComment);

//export
module.exports = router;
