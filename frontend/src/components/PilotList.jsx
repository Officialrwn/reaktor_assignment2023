import Pilot from './Pilot.jsx'

const PilotList = ({pilots}) => {
	return (
		<div className="bg-white text-green-800 m-3">
			{ pilots?.map(pilot => {
					{ return <Pilot key={pilot.pilotid} pilot={pilot}/> }})
					?? <Pilot/> }
			<Pilot/>
		</div>
	)
}

export default PilotList