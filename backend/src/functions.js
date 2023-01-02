const axios = require('axios');
const parser = require('xml2js');
const db = require('../services/db.js');

const forbiddenRange = 100000;
const originPos = 250000;
let updateIntervalMs = 2000;

const getDistanceFromCenter = (x, y) => {
	return Math.sqrt(Math.pow((x - originPos), 2) + Math.pow((y - originPos), 2));
}

const filterDrones = (allDrones) => {
	return allDrones.filter(drone => {
		const dist = getDistanceFromCenter(drone.positionX, drone.positionY);
		if (dist <= forbiddenRange) {
			drone.distance = dist;
			return drone;
		}
	});
}

const	errorHandler = (error) => {
	if (error.response) {
		console.error(error.response.data);
		console.error(error.response.status);
		console.error(error.response.headers);
	} else if (error.request) {
		console.error(error.request);
	} else {
		console.error("Error", error.message);
	}
	console.error(error.config);
}

const getPilotInfo = async (distance, serialNumber) => {
	return axios.get(`https://assignments.reaktor.com/birdnest/pilots/${serialNumber}`)
		.then(res => { return { ...res.data, distance: distance }})
		.catch(error => errorHandler(error));
}

const parseXml = (res) => {
	parser.parseString(res.data, async (err, results) => {
		if (err)
			throw err;
		const allDrones = results.report.capture[0].drone;
		updateIntervalMs = results.report.deviceInformation[0].updateIntervalMs[0];
		const drones = filterDrones(allDrones);
		const pilots = await Promise.all(drones.map(drone => getPilotInfo(drone.distance, drone.serialNumber[0])));
		pilots.map(pilot => {
			if (pilot) {
				delete pilot.createdDt;
				const pilotInfo = Object.values(pilot).map(prop => typeof prop === "string" ? `\'${prop.replace(/\'/g, '')}\'` : prop);
				db.create(pilotInfo);
			}
		})
	})
}

const getDrones = () => {
	axios.get("https://assignments.reaktor.com/birdnest/drones")
		.then((res) => parseXml(res))
		.catch(error => errorHandler(error));
	return updateIntervalMs;
}

module.exports = {
	getDrones
};

