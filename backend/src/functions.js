const axios = require('axios');
const parser = require('xml2js');
const db = require('../services/db.js');

const forbiddenRange = 100000;
const originPos = 250000;

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

const getPilotInfo = async (distance, serialNumber) => {
	return axios
		.get(`https://assignments.reaktor.com/birdnest/pilots/${serialNumber}`)
		.then(res => { return {...res.data, distance: distance}})
}

const getDrones = async (updateIntervalMs) => {
	axios
		.get("https://assignments.reaktor.com/birdnest/drones")
		.then(async (result) => {
			parser.parseString(result.data, async (err, results) => {
				if (err)
					throw err;
				const allDrones = results.report.capture[0].drone;
				updateIntervalMs = results.report.deviceInformation[0].updateIntervalMs[0];
				const drones = filterDrones(allDrones);
				const pilots = await Promise.all(drones.map(drone => getPilotInfo(drone.distance, drone.serialNumber[0])));
				pilots.map(pilot => {
					delete pilot.createdDt;
					const pilotInfo = Object.values(pilot).map(prop => typeof prop === "string" ? `\'${prop}\'` : prop);
					db.create(pilotInfo);
				})
			})
		})
		.catch(error => console.error("Error fetching data", error));
}

module.exports = {
	getDrones
};

