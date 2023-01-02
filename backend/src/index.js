const express = require('express');
const app = express();
const db = require('../services/db.js');
const server = require('http').Server(app);
const cors = require('cors');
const fn = require('./functions.js');

const messageResponse = "messageResponse";
let updateIntervalMs;

app.use(cors());

const socketIO = require('socket.io')(server, {
	cors: {
		origin: "http://localhost:3000"
	}
});

socketIO.on('connection', async (socket) => {
	console.log(`New clientid: {${socket.id}} connected`);
	const data = await fn.fetchData();
	socketIO.emit(messageResponse, data);
});

setInterval(async () => {
	const data = await fn.fetchData();
	updateIntervalMs = data.deviceInfo.updateIntervalMs[0];
	socketIO.emit(messageResponse, data);
}, updateIntervalMs ?? 2 * 1000)

setInterval(async () => {
	await db.cleanUp();
}, 60 * 1000)

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
})