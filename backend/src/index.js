const express = require('express');
const app = express();
const db = require('../services/db.js');
const http = require('http').Server(app);
const cors = require('cors');
const fn = require('./functions.js');

const messageResponse = "messageResponse";
let updateIntervalMs;

app.use(cors());

const socketIO = require('socket.io')(http, {
	cors: {
		origin: "http://localhost:3000"
	}
});

socketIO.on('connection', async (socket) => {
	console.log("Connection established");
	fetchData();
});

const fetchData = async () => {
	updateIntervalMs = fn.getDrones();
	const data = await db.getData();
	socketIO.emit(messageResponse, data);
}

setInterval(async () => {
	fetchData();
}, updateIntervalMs ?? 2 * 1000)

setInterval(async () => {
	await db.cleanUp();
}, 60 * 1000)

const PORT = process.env.PORT || 3001

http.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})