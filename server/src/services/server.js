const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: '../.env' });

app.use(cors({
	origin: process.env.HEROKU || "http://localhost:5173"
}));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(path.join(__dirname + '/../client/build/index.html')));
	});
}

const init = () => {
	const PORT = process.env.PORT || 3001;

	http.listen(PORT, () => {
		console.log(`Server running on ${PORT}`);
	})
}

module.exports = {
	init,
	http
}