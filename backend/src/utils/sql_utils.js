const fs = require('fs');
const path = require('path');

const get = (sql) => {
	const basedir = "../sql/";
	return fs.readFileSync(path.join(__dirname, basedir + sql)).toString();
}

module.exports = {
	get
}