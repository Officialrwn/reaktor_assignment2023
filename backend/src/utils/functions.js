const axios = require('axios');
const parser = require('xml2js');
const db = require('../services/db.services.js');
require('dotenv').config();

const baseUrl = process.env.BASE_URL;

const getDistanceToNest = (x, y) => {
	const originPos = process.env.ORIGIN_POSITION;
	return Math.sqrt(Math.pow((x - originPos), 2) + Math.pow((y - originPos), 2));
}

const updatePilotInfo = async (drones) => {
	try {
		const forbiddenRange = process.env.FORBIDDEN_RANGE;
		const allPilots = await Promise.all(drones.map(async (drone) => {
			if (drone.dist <= forbiddenRange) {
				const url = baseUrl + "/pilots/" + drone.serialNumber;
				const res = await axios.get(url);
				if (res.status === 200) {
					const {createdDt: _, ...pilot} = res.data;
					return { ...pilot, distance: drone.dist };
				} else {
					console.log(`No pilot info, status code: ${res.status}\n`);
				}
			}
		}))
		const pilots = allPilots.filter(pilot => pilot !== undefined);
		pilots.map(pilot => db.create(Object.values(pilot)));
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
					const posX = parseFloat(drone.positionX[0]);
					const posY = parseFloat(drone.positionY[0]);
					const obj = {
						serialNumber: drone.serialNumber[0],
						posX: posX,
						posY: posY,
						dist: getDistanceToNest(posX,posY),
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

const fetchData = async () => {
	const res = await axios.get(baseUrl + "/drones");
	if (res.status === 200) {
		
		const parsedData = await parseXml(res.data);
		updatePilotInfo(parsedData.drones);
		const data = {
			pilots: await db.getData(),
			deviceInfo: parsedData.deviceInformation
		};
		return data;
	} else {
		console.error(`Failed to fetch drones from api, status code: ${res.status}`);
	}
}

module.exports = {
	fetchData,
};

