const { pool } = require("../database") // import pool

const getPosts = async (_req, res) => {
    try {
        const result = await pool.query("SELECT * FROM posts;");
        res.send(result.rows)
    } catch (error) {
        console.error("error:", error)
        res.status(500).send("Internal Error")
    }
}

const getPostById = async (req, res) => {
    const postId = req.params.id
    try {
        const result = await pool.query("SELECT * FROM posts where id = $1", [postId])
        // Check if requested id returns any data
        result.rowCount ? res.send(result.rows) : res.send("Invalid Id!")
    } catch (error) {
        console.error("eror:", error)
        res.status(500).send("Error with get post by id!")
    }
}

const createPost = async (req, res) => {
    const { title, summary, content } = req.body
    const response = await pool.query("INSERT INTO posts (title, summary, content) VALUES ($1, $2, $3)", [title, summary, content]) 
    console.log(response)
    res.send("post created")

}

module.exports = {
    getPosts,
    getPostById,
    createPost
}
