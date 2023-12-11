const express = require("express")
const router = express.Router()

// Controllers
const { getPosts } = require("../controllers/post_controllers")


router.get("/", getPosts)

module.exports = router
