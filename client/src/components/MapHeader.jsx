const MapHeader = ({data}) => {
	const closestPilot = data?.pilots?.reduce((a, b) => parseFloat(a.distance) < parseFloat(b.distance) ? a : b);
	const dist = parseFloat(closestPilot?.distance).toFixed(2);
	return (
		<div className="bg-[#3A435E] relative text-sm text-[#6C6F7F] font-bold pl-4 py-2 border-x-2 border-y-2 border-[#6C6F7F]">
			<p className="inline-flex">RADAR MAP</p>
			<p className="inline-flex absolute right-5 font-extrabold text-[#6C6F7F]">Closest confirmed distance: {dist ? dist : "0.00"}m</p>
		</div>
	)
}

export default MapHeader