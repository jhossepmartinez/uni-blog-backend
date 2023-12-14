const express = require("express")
const cors = require("cors")
const routes = require("./routes/posts_routes")

const PORT = 3000
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())


// Routes
app.use("/api/posts", routes)


app.listen(PORT, () => {
    console.log(`Backend running on PORT:${PORT}`)
})


