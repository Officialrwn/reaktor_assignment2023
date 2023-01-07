import Chart from './Chart.jsx'
import Line from './Line.jsx'
import Scanner from './Scanner.jsx'
import Drone from './Drone.jsx'

const Map = ({data}) => {
	const dist = data?.closestPilot?.distance/1000;
	const pilot = {
		posx: "300",
		posy: "300"
	}
	return (
		<div className="inline-flex h-screen w-2/3">
			<div className="w-full h-full flex flex-col">
				<div className="bg-gray-200 relative text-sm text-green-700 font-bold pl-4 py-2 border-b-2 border-gray-400">
					<p className="inline-flex">RADAR MAP</p>
					<p className="inline-flex absolute right-5 font-extrabold text-red-700">Closest confirmed distance: {dist ? dist.toFixed(2) : "0.00"}m</p>
				</div>
				<div className="text-white flex w-full h-full bg-black justify-center items-center relative">
					<div className="relative bg-black items-center inline-flex justify-center">
						<Line/>
						<p className="absolute text-green-800 font-extrabold top-0 right-0">R = 100m</p>
						<Drone pilot={null}/>
						{/* { data?.pilots && data.pilots.map(pilot => {
							return <Drone key={pilot.pilotid} pilot={pilot}/> })} */}
						<Scanner/>
						<Chart className="absolute inline-flex"/>
						<div className="absolute inline-flex border-2 rounded-full border-lightgreen w-[500px] h-[500px]"></div>
						<hr className="absolute inline-flex bg-lightgreen h-[520px] w-[2px]"/>
						<hr className="absolute inline-flex bg-lightgreen h-[520px] w-[2px] rotate-90"/>
					</div>
				</div>
			</div>
		</div>
		)
	}
	export default Map