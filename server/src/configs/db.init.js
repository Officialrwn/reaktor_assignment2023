const pool = require('../configs/db.config.js').pool;
const fs = require('fs');
const path = require('path');

const init = () => {
	const sql = fs.readFileSync(path.join(__dirname, '../sql/db.init.sql')).toString();
	pool.query(sql);
	console.log("db initiated!");
}

module.exports = {
	init
}