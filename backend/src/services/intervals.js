const db = require('./db.services.js');
const fn = require('../utils/functions.js');
const ws = require('./ws.js');

let updateIntervalMs;

const init = () => {
	setInterval(async () => {
		const data = await fn.fetchData();
		updateIntervalMs = data.deviceInfo.updateIntervalMs[0];
		console.log(data);
		ws.socketIO.emit(ws.messageResponse, data);
	}, updateIntervalMs ?? 2 * 1000)

	setInterval(async () => {
		await db.cleanUp();
	}, 60 * 1000)
}

module.exports = {
	init
}
