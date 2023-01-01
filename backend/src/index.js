
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const parser = require('xml2js');
const db = require('../services/db.js');
const app = express();
const forbiddenRange = 100000;
const centerPos = 250000;

app.use(cors())

const getDistanceFromCenter = (x, y) => {
	return Math.sqrt(Math.pow((x - centerPos), 2) + Math.pow((y - centerPos), 2));
}

const getPilotInfo = async (distance, serialNumber) => {
	return axios
		.get(`https://assignments.reaktor.com/birdnest/pilots/${serialNumber}`)
		.then(res => { return {...res.data, distance: distance }})
}

setInterval(async () => {
	axios
		.get("https://assignments.reaktor.com/birdnest/drones")
		.then(async (result) => {
			parser.parseString(result.data, async (err, results) => {
				if (err)
					throw err;
				const allDrones = results.report.capture[0].drone;
				const drones = allDrones.filter(drone => {
					const dist = getDistanceFromCenter(drone.positionX, drone.positionY);
					if (dist <= forbiddenRange) {
						drone.distance = dist;
						return drone;
					}
				});
				const pilots = await Promise.all(drones.map(drone => getPilotInfo(drone.distance, drone.serialNumber[0])));
				pilots.map(pilot => {
					delete pilot.createdDt;
					const pilotInfo = Object.values(pilot).map(prop => typeof prop === "string" ? `\'${prop}\'` : prop);
					db.create(pilotInfo);
				})
			})
		})
		.catch(error => console.log("Error fetching data", error));
}, 2000)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})