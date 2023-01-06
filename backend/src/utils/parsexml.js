const parser = require('xml2js');

const parseXml = (res) => {
	return new Promise((resolve, reject) => {
		parser.parseString(res, (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		})
	})
}

module.exports = {
	parseXml
}