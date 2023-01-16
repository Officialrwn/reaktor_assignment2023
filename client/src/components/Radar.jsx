import Chart from './Chart.jsx'
import Line from './Line.jsx'
import Scanner from './Scanner.jsx'
import Drone from './Drone.jsx'
import RadarBorders from './RadarBorders.jsx'

const Radar = ({data}) => {
	const pilot = { posx: 340, posy: 250 };
	return (
		<div id="radar" className="border-x-2 border-y-2 border-[#6C6F7F] text-[#6A8D92] flex w-full h-full bg-[#313E50] justify-center items-center relative">
			<div className="relative bg-[#313E50] items-center inline-flex justify-center">
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