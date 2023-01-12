import Pilot from './Pilot.jsx'
import Loading from './Loading.jsx'

const Container = ({data}) => {
	// const closest = data?.closestPilot;
	// const pilots = data?.pilots?.filter(pilot => pilot.pilotid !== closest.pilotid);
	// console.log("closest", data?.closestPilot?.firstname);
	// console.log(pilots);
	const pilots = data?.pilots;
	return (
		<div className="inline-flex h-screen w-1/3">
			<div className="w-full h-full flex flex-col">
				<div className="bg-gray-200 text-sm text-green-700 font-bold pl-4 py-2 border-b-2 border-l border-gray-400">
						List of NDZ Violations past 10 min
				</div>
				<div className="w-full h-full overflow-auto shadow bg-gray-300" id="journal-scroll">
					{ pilots?.length ? <Pilot pilots={pilots}/> : <Loading/> }
				</div>
			</div>
		</div>
	)
}

export default Container