const parser = require('../utils/parsexml.js');
const db = require('../services/db.services.js');
const axios = require('axios');
require('dotenv').config({ path: '../.env' });

const baseUrl = process.env.BASE_URL;
const originPos = parseInt(process.env.ORIGIN_POSITION) || 250000;
const forbiddenRange = parseInt(process.env.FORBIDDEN_RANGE) || 100000;

const getDistanceToNest = (x, y) => {
	return Math.sqrt(Math.pow((x - originPos), 2) + Math.pow((y - originPos), 2));
}

const getRadarPos = (pos) => {
	return ((Math.round(pos) - originPos + forbiddenRange) / forbiddenRange * originPos) / 1000;
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
		const pilots = await Promise.all(drones.map(async (drone) => {
			if (drone.dist <= forbiddenRange) {
				const url = baseUrl + "/pilots/" + drone.serialNumber;
				const res = await axios.get(url);
				if (res.status === 200) {
					const {createdDt: _, ...pilot} = res.data;
					const posX = getRadarPos(drone.posX);
					const posY = getRadarPos(drone.posY);
					return { ...pilot, distance: drone.dist / 1000, posx: posX, posy: posY };
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
				.map(async (pilot) => await db.create(Object.values(pilot)));
	} catch (err) {
		console.error("Failed to update pilot info\n", err);
	}
}

const getDeviceInfo = async () => {
	try { 
		const res = await axios.get(baseUrl + "/drones");
		if (res.status === 200) {
			const data = await parser.parseXml(res.data);
			return parseData(data);
		} else {
			console.error(`Failed to fetch drones from api, status code: ${res.status}`);
		}
	} catch(err) {
		console.error("Error fetching device info");
	}
}

const init = async () => {
	const data = await getDeviceInfo();
	if (data) {
		const pilots = await getPilotInfo(data?.drones);
		if (pilots)
			updatePilotInfo(pilots);
		const res = await db.getData();
		if (res.rows) {
			const obj = {
				pilots: res.rows,
				deviceInfo: data.deviceInformation
			};
			return obj;
		} else {
			console.log("0 rows queried");
		}
	}
}

module.exports = {
	init
};