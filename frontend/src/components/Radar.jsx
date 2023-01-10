import Chart from './Chart.jsx'
import Line from './Line.jsx'
import Scanner from './Scanner.jsx'
import Drone from './Drone.jsx'
import RadarBorders from './RadarBorders.jsx'

const Radar = ({data}) => {
	const pilot = { posx: 340, posy: 250 };
	return (
		<div className="text-white flex w-full h-full bg-black justify-center items-center relative">
			<div className="relative bg-black items-center inline-flex justify-center">
				<p className="absolute text-green-800 font-extrabold top-0 right-0">R = 100m</p>
				{ data?.pilots && data.pilots.map(pilot => {
				return <Drone key={pilot.pilotid} pilot={pilot}/> })}
				<Scanner/>
				<Chart/>
				<RadarBorders/>
				<Line/>
			</div>
		</div>
	)
}

export default Radar