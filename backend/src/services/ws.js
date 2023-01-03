const server = require('./server.js');
const fn = require('../utils/functions.js');

const messageResponse = "messageResponse";

const socketIO = require('socket.io')(server.http, {
	cors: {
		origin: "http://localhost:3000"
	}
});

const init = () => {
	socketIO.on('connection', async (socket) => {
		console.log(`New clientid: {${socket.id}} connected`);
		const data = await fn.fetchData();
		socketIO.emit(messageResponse, data);
	});
}

module.exports = {
	init,
	socketIO,
	messageResponse
}