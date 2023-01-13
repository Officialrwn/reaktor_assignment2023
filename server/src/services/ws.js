const server = require('./server.js');
const droneApi = require('../controllers/droneApiService.js');
require('dotenv').config();

const messageResponse = "messageResponse";

const socketIO = require('socket.io')(server.http, {
	cors: {
		origin: "https://birdnest-ndz-reaktor.herokuapp.com/",
		methods: ["GET"],
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