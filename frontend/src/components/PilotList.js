import { useState, useEffect } from 'react';
import Pilot from './Pilot.js'

const PilotList = ({socket}) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		socket.on('messageResponse', (data) => {
			setData(data);
			// console.log("socket data: ", data);
		})
	}, [socket]);
	return (
		<div>
			{ data?.pilots.map(pilot => {
				{ return <Pilot key={pilot.pilotid} pilot={pilot}/> }
			})}
		</div>
	)
}

export default PilotList