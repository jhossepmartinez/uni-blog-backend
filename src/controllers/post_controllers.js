const { pool } = require("../database")

const getPosts = async (_req, res) => {
    try {
        const result = await pool.query("SELECT * FROM posts;");
        res.send(result.rows)
    } catch (error) {
        console.error("error:", error)
        res.status(500).send("Internal Error")
    }
}

module.exports = {
    getPosts
}
