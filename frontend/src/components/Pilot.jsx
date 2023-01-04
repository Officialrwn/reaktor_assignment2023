
const Pilot = ({pilot}) => {
	const date = new Date(pilot?.date).toLocaleTimeString(
		navigator.language, {hour: '2-digit', minute:'2-digit'
	});
	const dist = pilot?.distance / 1000;
	return (
		<tr className="relative transform scale-100 w-1 text-xs py-1 border-b-2 border-l border-gray-400 cursor-default bg-blue-500 bg-opacity-25">
			<td className="pl-5 whitespace-no-wrap w-16">
				<div className="text-gray-400">Time</div>
				<div>{date}</div>
			</td>
			<td className="px-2 py-2 whitespace-no-wrap">
				<div className="leading-5 text-gray-500 font-medium">{pilot.firstname} {pilot.lastname}</div>
				<div className="leading-5 text-gray-800">{pilot.email}</div>
			</td>
			<td className="px-2 py-2 whitespace-no-wrap">
				<div className="leading-5 pr-5 text-right text-red-500 font-medium">{dist}m</div>
				<div className="leading-5 pr-5 text-right text-gray-800">{pilot.phone}</div>
			</td>
		</tr>
	)
}

export default Pilot