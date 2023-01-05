const Map = ({data}) => {
	const dist = data?.closestPilot?.distance/1000;
	return (
		<div className="inline-flex h-screen w-2/3">
			<div className="w-full h-full flex flex-col">
				<div className="bg-gray-200 relative text-sm text-green-700 font-bold pl-4 py-2 border-b-2 border-gray-400">
					<p className="inline-flex">RADAR MAP</p>
					<p className="inline-flex absolute right-5 font-extrabold text-red-700">Closest confirmed distance: {dist ? dist.toFixed(2) : "0.00"}m</p>
				</div>
				<div className="text-white flex w-full h-full bg-black justify-center items-center">
					<div className="text-green-800 text-4xl font-medium">Map placement</div>
				</div>
			</div>
		</div>
	)
}

export default Map