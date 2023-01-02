const mysql = require('mysql2/promise');
const config = require('../config.db');

const create = async (pilotInfo) => {
	try {
		const db = await mysql.createConnection(config.db);
		db.connect();
		const sql = "insert into pilots (pilotid, firstname, lastname, phone, email, distance) values ? \
		on duplicate key update distance = if(distance < values(distance), distance, values(distance))";
		const values = [];
		values.push(pilotInfo);
		db.query(sql, [values]);
		db.end();
	} catch (err) {
		console.error("Failed inserting to db\n", err);
	}
}

const cleanUp = async () => {
	try {
		const db = await mysql.createConnection(config.db);
		db.connect();
		const sql = "delete from pilots where date < (NOW() - interval 10 minute)"
		db.query(sql);
		db.end();
	} catch (err) {
		console.error("Failed to cleanup db\n", err);
	}
}

const getData = async () => {
	try {
		const db = await mysql.createConnection(config.db);
		db.connect();
		const sql = "select * from pilots where date > (NOW() - interval 10 minute)"
		const res = await db.query(sql);
		db.end();
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