const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config.db');
const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	{
		host: config.db.host,
		dialect: "mysql"
	}
);

// const Pilot = sequelize.define("pilots", {
// 	pilotid: null,
// 	firstname: null,
// 	lastname: null,
// 	phone: null,
// 	email: null,
// 	distance: 0,
// });

const connect = () => {
	sequelize
		.authenticate()
		.then(() => console.log("Connected to db"))
		// .then(() => {
		// 	Pilot.create({
		// 		pilotid: "HEHEHEAH151251",
		// 		firstname: "Leo",
		// 		lastname: "Tran"
		// 	})
		// 	.then(res => console.log("res", res))
		// 	.catch((err) => console.log("error"));
		// })
		.catch((err) => console.log("Failed to connect db"));
}


module.exports =  {
	connect,
}