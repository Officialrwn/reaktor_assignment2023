const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
require('dotenv').config();

app.use(cors());

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