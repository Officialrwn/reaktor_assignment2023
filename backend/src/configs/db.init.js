const pool = require('./db.config.js').pool;

/* Create table if table does not exist */

const init = () => {
	console.log("Table created!");
}

module.exports = {
	init
}

