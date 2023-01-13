const db = require('./src/configs/db.init.js');
const ws = require('./src/services/ws.js');
const intervals = require('./src/services/intervals.js');
const server = require('./src/services/server.js');

// db.init();
ws.init();
intervals.init();
server.init();