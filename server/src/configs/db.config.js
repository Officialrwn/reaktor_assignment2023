const Pool = require('pg').Pool
require('dotenv').config({ path: '../.env' });

const pool = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
	ssl: true
})

module.exports = {
	pool
}