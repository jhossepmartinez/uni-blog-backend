// Pool over Connection because Pool will automatically create and close connections as needed
const dotenv = require("dotenv")
const { Pool } = require("pg")

// Initialize .env to obtain values
dotenv.config({})

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT
})

module.exports = {
    pool
}
