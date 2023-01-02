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
		const dist = getDistanceFromCenter(drone.posX, drone.posY);
		if (dist <= forbiddenRange) {
			drone.distance = dist;
			return drone;
		}
	});
}

const updatePilotInfo = async (allDrones) => {
	try {
		const drones = filterDrones(allDrones);
		const pilots = await Promise.all(drones.map(async (drone) => {
			const dist = getDistanceFromCenter(drone.posX, drone.posY);
			const pilot = await axios.get(`https://assignments.reaktor.com/birdnest/pilots/${drone.serialNumber}`);
			return { ...pilot.data, distance: dist };
		}));
		pilots.map(pilot => {
			if (pilot) {
				delete pilot.createdDt;
				const pilotInfo = Object.values(pilot).map(prop => typeof prop === "string" ? `\'${prop.replace(/\'/g, '')}\'` : prop);
				db.create(pilotInfo);
			}
		});
	} catch (err) {
		console.error("Update pilot info failed\n", err);
	}
}

const parseXml = (res) => {
	return new Promise((resolve, reject) => {
		parser.parseString(res, (err, result) => {
			if (err) {
				reject(err);
			} else {
				const drones = result.report.capture[0].drone.map(drone => {
					const obj = {
						serialNumber: drone.serialNumber[0],
						posY: parseFloat(drone.positionY[0]),
						posX: parseFloat(drone.positionX[0])
					}
					return obj;
				})
				const data = {
					deviceInformation: result.report.deviceInformation[0],
					drones: drones
				}
				resolve(data);
			}
		})
	})
}

module.exports = {
	parseXml,
	updatePilotInfo
};

