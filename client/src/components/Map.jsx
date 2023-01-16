import React from 'react'
import MapHeader from './MapHeader.jsx'
import Radar from './Radar.jsx'

const Map = ({data}) => {
	return (
		<div className="inline-flex h-screen w-2/3" id="map">
			<div className="w-full h-full flex flex-col">
				<MapHeader data={data}/>
				<Radar data={data}/>
			</div>
		</div>
	)
}

export default Map