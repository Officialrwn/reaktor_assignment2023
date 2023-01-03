const pool = require('../configs/db.config.js').pool;
const fs = require('fs');
const path = require('path');

const create = async (pilotInfo) => {
	try {
		// const sql = fs.readFileSync(path.join(__dirname, '../sql/db.create.sql')).toString();
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
		const sql = fs.readFileSync(path.join(__dirname, '../sql/db.cleanup.sql')).toString();
		pool.query(sql);
	} catch (err) {
		console.error("Failed to cleanup db\n", err);
	}
}

const getData = async () => {
	try {
		const sql = fs.readFileSync(path.join(__dirname, '../sql/db.getdata.sql')).toString();
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