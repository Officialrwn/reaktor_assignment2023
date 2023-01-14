import React from "react";

const Pilot = ({pilots}) => {
	
	return (
		<table className="w-full">
			<tbody className={!pilots ? "flex justify-center items-center" : ""}>
				{pilots?.map(pilot => {
					const date = new Date(pilot?.date).toLocaleTimeString(
						navigator.language, {hour: '2-digit', minute:'2-digit'
					});
					const dist = parseFloat(pilot?.distance).toFixed(2);
					return (
						<React.Fragment key={pilot.pilotid}>
							<tr className="bg-[#3A435E] border-[#6C6F7F] relative transform scale-100 w-1 text-xs py-1 border-b-2 cursor-default hover:bg-[#6D9DC5]">
								<td className="px-2 whitespace-no-wrap w-20">
									<div className="font-semibold text-[#6C6F7F]">Today</div>
									<div className="text-[#455561] font-semibold text-xs">{date}</div>
								</td>
								<td className="px-2 py-2 whitespace-no-wrap">
									<div className=" text-[#6C6F7F] font-extrabold">{pilot.firstname} {pilot.lastname}</div>
									<div className="text-[#455561] font-semibold">{pilot.email}</div>
								</td>
								<td className="px-2 py-2 whitespace-no-wrap">
									<div className="pr-5 text-right text-[#6C6F7F] font-extrabold">{dist}m</div>
									<div className="pr-5 text-right font-semibold text-[#455561]">{pilot.phone}</div>
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