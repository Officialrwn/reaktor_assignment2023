const MapHeader = (data) => {
	const dist = data?.closestPilot?.distance;
	
	return (
		<div className="bg-gray-200 relative text-sm text-green-700 font-bold pl-4 py-2 border-b-2 border-gray-400">
			<p className="inline-flex">RADAR MAP</p>
			<p className="inline-flex absolute right-5 font-extrabold text-red-700">Closest confirmed distance: {dist ? dist.toFixed(2) : "0.00"}m</p>
		</div>
	)
}

export default MapHeader