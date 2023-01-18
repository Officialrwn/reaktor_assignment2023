const MapHeader = ({data}) => {
	let dist = 0.00;
	if (data && data?.pilots?.length > 0) {
		const closestPilot = data.pilots.reduce((a, b) => parseFloat(a.distance) < parseFloat(b.distance) ? a : b);
		dist = parseFloat(closestPilot?.distance).toFixed(2);
	}
	return (
		<div className="bg-[#3A435E] relative text-sm text-[#6C6F7F] font-bold pl-4 py-2 border-x-2 border-y-2 border-[#6C6F7F]">
			<p className="inline-flex">RADAR MAP</p>
			<p className="inline-flex absolute right-5 font-extrabold text-[#6C6F7F]">Closest confirmed distance: {dist}m</p>
		</div>
	)
}

export default MapHeader