import MapHeader from './MapHeader.jsx'
import Radar from './Radar.jsx'


const Map = ({data}) => {
	return (
		<div className="inline-flex h-screen w-2/3">
			<div className="w-full h-full flex flex-col">
				<MapHeader data={data}/>
				<Radar/>
			</div>
		</div>
	)
}

export default Map