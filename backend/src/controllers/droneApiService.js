const parser = require('../utils/parsexml.js');
const db = require('../services/db.services.js');
const axios = require('axios');
require('dotenv').config();

const baseUrl = process.env.BASE_URL;

const getDistanceToNest = (x, y) => {
	const originPos = process.env.ORIGIN_POSITION || 250000;
	return Math.sqrt(Math.pow((x - originPos), 2) + Math.pow((y - originPos), 2));
}

const parseData = (parsedData) => {
	const drones = parsedData.report.capture[0].drone.map(drone => {
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
		deviceInformation: parsedData.report.deviceInformation[0],
		drones: drones
	}
	return data;
}

const getPilotInfo = async (drones) => {
	try {
		const forbiddenRange = process.env.FORBIDDEN_RANGE;
		const pilots = await Promise.all(drones.map(async (drone) => {
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
		return pilots;
	} catch (err) {
		console.error("Update pilot info failed\n", err);
	}
}

const updatePilotInfo = (pilots) => {
	try {
		pilots
			.filter(pilot => pilot !== undefined)
			.map(async (pilot) => await db.create([Object.values(pilot)]));
	} catch (err) {
		console.error("Failed to update pilot info\n", err);
	}
}

const getDeviceInfo = async () => {
	const res = await axios.get(baseUrl + "/drones");
	if (res.status === 200) {
		const data = await parser.parseXml(res.data);
		return parseData(data);
	} else {
		console.error(`Failed to fetch drones from api, status code: ${res.status}`);
	}
}

const init = async () => {
	const data = await getDeviceInfo();
	const pilots = await getPilotInfo(data.drones);
	updatePilotInfo(pilots);
	const res = await db.getData();
	let closestPilot;
		if (res.length) {
			closestPilot = res?.reduce((a, b) => a.distance < b.distance ? a : b);
		}
		const obj = {
			pilots: res,
			closestPilot: closestPilot,
			deviceInfo: data.deviceInformation
		};
		return obj;
}

module.exports = {
	init
};