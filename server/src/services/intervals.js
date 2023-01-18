const db = require('./db.services.js');
const droneApi = require('../controllers/droneApiService.js');
const ws = require('./ws.js');


const init = () => {
	let updateIntervalMs;

	setInterval(async () => {
		const data = await droneApi.init();
		updateIntervalMs = data?.deviceInfo.updateIntervalMs[0];
		ws.socketIO.emit(ws.messageResponse, data);
		console.log(data);
	}, updateIntervalMs ?? 2 * 1000)

	setInterval(async () => {
		await db.cleanUp();
	}, 60 * 1000)
}

module.exports = {
	init
}
