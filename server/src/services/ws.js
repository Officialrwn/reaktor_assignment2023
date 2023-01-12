const server = require('./server.js');
const droneApi = require('../controllers/droneApiService.js');
require('dotenv').config({ path: '../.env' });

const messageResponse = "messageResponse";

const socketIO = require('socket.io')(server.http, {
	cors: {
		origin: process.env.HEROKU || "http://localhost:5173",
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