const pool = require('../configs/db.config.js').pool;
const sql = require('../utils/sql_utils.js');

const create = async (pilots) => {
	try {
		const query = "insert into pilots (pilotid, firstname, lastname, phone, email, distance) values ? \
		on duplicate key update distance = if(distance < values(distance), distance, values(distance))";
		pool.query(query, [pilots]);
	} catch (err) {
		console.error("Failed to insert into db\n", err);
	}
}

const cleanUp = async () => {
	try {
		const query = sql.get('db.cleanup.sql');
		pool.query(query);
	} catch (err) {
		console.error("Failed to cleanup db\n", err);
	}
}

const getData = async () => {
	try {
		const query = sql.get('db.getdata.sql');
		const res = await pool.query(query);
		return (res[0]);
	} catch (err) {
		console.error("Failed to get data from db\n", err);
	}
}

module.exports = {
	create,
	cleanUp,
	getData
}