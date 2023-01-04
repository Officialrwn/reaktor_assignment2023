import Pilot from './Pilot.jsx'

const PilotList = ({pilots}) => {
	return (
		<div>
			{ pilots?.map(pilot => {
					{ return <Pilot key={pilot.pilotid} pilot={pilot}/> }})
					?? <Pilot/> }
		</div>
	)
}

export default PilotList