const express = require("express")
const router = express.Router()

// Controllers
const { getPosts, getPostById, createPost } = require("../controllers/post_controllers")


router.get("/", getPosts)
router.get("/:id", getPostById)
router.post("/", createPost)

module.exports = router
