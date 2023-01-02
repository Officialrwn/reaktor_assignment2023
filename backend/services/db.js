const mysql = require('mysql2/promise');
const config = require('../config.db');

const pool = mysql.createPool({
	...config.db,
	connectionLimit: 100,
});

const create = async (pilotInfo) => {
	try {
		const sql = "insert into pilots (pilotid, firstname, lastname, phone, email, distance) values ? \
		on duplicate key update distance = if(distance < values(distance), distance, values(distance))";
		const values = [];
		values.push(pilotInfo);
		pool.query(sql, [values]);
	} catch (err) {
		console.error("Failed to insert into db\n", err);
	}
}

const cleanUp = async () => {
	try {
		const sql = "delete from pilots where date < (NOW() - interval 10 minute)"
		pool.query(sql);
	} catch (err) {
		console.error("Failed to cleanup db\n", err);
	}
}

const getData = async () => {
	try {
		const sql = "select * from pilots where date > (NOW() - interval 10 minute)"
		const res = await pool.query(sql);
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