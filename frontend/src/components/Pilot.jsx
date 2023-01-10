import React from "react";

const Pilot = ({pilots}) => {
	
	return (
		<table className="w-full">
			<tbody className={!pilots ? "flex justify-center items-center" : ""}>
				{pilots?.map(pilot => {
					const date = new Date(pilot?.date).toLocaleTimeString(
						navigator.language, {hour: '2-digit', minute:'2-digit'
					});
					const dist = pilot?.distance;
					return (
						<React.Fragment key={pilot.pilotid}>
							<tr className="relative transform scale-100 w-1 text-xs py-1 border-b-2 border-l border-gray-400 cursor-default bg-blue-400 bg-opacity-25">
								<td className="px-2 whitespace-no-wrap w-20">
									<div className="font-semibold text-gray-400">Today</div>
									<div className="text-gray-800 font-semibold text-xs">{date}</div>
								</td>
								<td className="px-2 py-2 whitespace-no-wrap">
									<div className=" text-gray-500 font-extrabold">{pilot.firstname} {pilot.lastname}</div>
									<div className="text-gray-800 font-semibold">{pilot.email}</div>
								</td>
								<td className="px-2 py-2 whitespace-no-wrap">
									<div className="pr-5 text-right text-red-700 font-extrabold">{dist.toFixed(2)}m</div>
									<div className="pr-5 text-right font-semibold text-gray-800">{pilot.phone}</div>
								</td>
							</tr>
						</React.Fragment>
					);
				})}
			</tbody>
		</table>
	)
}

export default Pilot