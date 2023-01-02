import { useState, useEffect } from 'react';
import Pilot from './Pilot.js'

const PilotList = ({socket}) => {
	const [pilots, setPilots] = useState([]);
	useEffect(() => {
		socket.on('messageResponse', (data) => {
			setPilots(data);
			console.log("socket data: ", data);
		})
	}, [socket]);
	return (
		<div>
			{ pilots?.map(pilot => {
				return <Pilot key={pilot.pilotid} pilot={pilot}/>
			})}
		</div>
	)
}

export default PilotList