import React from 'react'

const Drone = ({pilot}) => {
	const posCorrection = 7.5;
	const x = pilot.posx - posCorrection;
	const y = pilot.posy - posCorrection;
	const line = "absolute z-40 w-0 h-0 border-l-[6px] inline-flex border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-400";
	const ping = "absolute animate-ping opacity-75 z-40 w-0 h-0 border-l-[8px] inline-flex border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-green-400";
	const dist = parseFloat(pilot.distance).toFixed(2);
	return (
		<React.Fragment>
			<div style={{left: `${x}px`, top: `${y}px`}} className={line}>
				<p className="absolute w-[8vw] inline-flex bg-gray-900 border-green-500 border-2 z-50 opacity-0 text-green-800 hover:opacity-90">{pilot.firstname} {pilot.lastname} {dist}m</p>
			</div>
			<div style={{left: `${x-2}px`, top: `${y-2}px`}} className={ping}></div>
		</React.Fragment>
	)
}

export default Drone