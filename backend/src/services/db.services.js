const pool = require('../configs/db.config.js').pool;
const sql = require('../utils/sql.js');

const create = async (pilots) => {
	try {
		const query = sql.get('db.create.sql');
		await pool.query(query, [pilots]);
	} catch (err) {
		console.error("Failed to insert into db\n", err);
	}
}

const cleanUp = async () => {
	try {
		const query = sql.get('db.cleanup.sql');
		await pool.query(query);
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