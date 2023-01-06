const server = require('./server.js');
const droneApi = require('../controllers/droneApiService.js');

const messageResponse = "messageResponse";

const socketIO = require('socket.io')(server.http, {
	cors: {
		origin: "http://localhost:5173"
	}
});

const init = () => {
	socketIO.on('connection', async (socket) => {
		console.log(`New clientid: {${socket.id}} connected`);
		const data = await droneApi.init();
		socketIO.emit(messageResponse, data);
	});
}

module.exports = {
	init,
	socketIO,
	messageResponse
}