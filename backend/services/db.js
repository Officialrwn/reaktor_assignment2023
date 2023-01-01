const mysql = require('mysql2/promise');
const config = require('../config.db');

const create = async (pilotInfo) => {
	try {
		const db = await mysql.createConnection(config.db);
		db.connect();
		const pilot = `(${pilotInfo.join(',')})`;
		const sql = `insert into pilots (pilotid, firstname, lastname, phone, email, distance) values ${pilot} \
		on duplicate key update distance = if(distance < values(distance), distance, values(distance)), amount=amount+1`;
		db.query(sql);
		db.end();
		console.log("inserted/updated pilot: ", pilot);
	} catch (err) {
		console.error("Failed inserting to db", err);
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
		console.error("Failed to cleanup db", err);
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
		console.error("Failed to cleanup db", err);
	}
}

module.exports = {
	create,
	cleanUp,
	getData
}