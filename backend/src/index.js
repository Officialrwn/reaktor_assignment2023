const express = require('express');
const app = express();
const db = require('../services/db.js');
const http = require('http').Server(app);
const cors = require('cors');
const axios = require('axios');
const fn = require('./functions.js');

const messageResponse = "messageResponse";
const dronesApi = "https://assignments.reaktor.com/birdnest/drones";
let updateIntervalMs;

app.use(cors());

const socketIO = require('socket.io')(http, {
	cors: {
		origin: "http://localhost:3000"
	}
});

socketIO.on('connection', async (socket) => {
	console.log("New client connected");
	const data = await fetchData();
	socketIO.emit(messageResponse, data);
});

const fetchData = async () => {
	const res = await axios.get(dronesApi);
	const parsedData = await fn.parseXml(res.data);
	fn.updatePilotInfo(parsedData.drones);
	const data = {
		pilots: await db.getData(),
		deviceInfo: parsedData.deviceInformation
	};
	return data;
}

setInterval(async () => {
	const data = await fetchData();
	updateIntervalMs = data.deviceInfo.updateIntervalMs[0];
	console.log(data);
	socketIO.emit(messageResponse, data);
}, updateIntervalMs ?? 2 * 1000)

setInterval(async () => {
	await db.cleanUp();
}, 60 * 1000)

const PORT = process.env.PORT || 3001

http.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})