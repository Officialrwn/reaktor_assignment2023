const mysql = require('mysql2/promise');
const config = require('../config.db');

const create = async (pilotInfo) => {
	try {
		const db = await mysql.createConnection(config.db);
		db.connect();
		const pilot = `(${pilotInfo.join(',')})`;
		const sql = `insert into pilots (pilotid, firstname, lastname, phone, email, distance) values ${pilot} \
		on duplicate key update distance = if(distance < values(distance), distance, values(distance)), amount=amount+1`;
		await db.query(sql);
		console.log("inserted/updated pilot: ", pilot);
	} catch (err) {
		console.error("DB ERROR", err);
	}
}

module.exports = {
	create
}