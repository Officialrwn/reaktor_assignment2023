const express = require('express');
const app = express();
const db = require('../services/db.js');
const http = require('http').Server(app);
const cors = require('cors');
const fn = require('./functions.js');

const messageResponse = "messageResponse";
let updateIntervalMs = 2;

app.use(cors());

const socketIO = require('socket.io')(http, {
	cors: {
		origin: "http://localhost:3000"
	}
});

socketIO.on('connection', async (socket) => {
	fn.getDrones(updateIntervalMs);
	console.log("Connection established");
	const data = await db.getData();
	socketIO.emit(messageResponse, data);
});

setInterval(async () => {
	fn.getDrones(updateIntervalMs);
	console.log("update: ", updateIntervalMs);
	const data = await db.getData();
	socketIO.emit(messageResponse, data)
}, 60 * 1000)

setInterval(() => {
	db.cleanUp();
}, 60 * 1000)

const PORT = process.env.PORT || 3001

http.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})