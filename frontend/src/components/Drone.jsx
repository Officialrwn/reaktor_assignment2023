import React from 'react'

const Drone = ({pilot}) => {
	const posCorrection = 7.5;
	const x = pilot.posx - posCorrection;
	const y = pilot.posy - posCorrection;
	const line = "absolute z-40 w-0 h-0 border-l-[8px] inline-flex border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-green-400";
	const dist = parseFloat(pilot.distance).toFixed(2);
	return (
		<React.Fragment>
			<div style={{left: `${x}px`, top: `${y}px`}} className={line}>
				<p className="absolute bg-gray-500 z-50 opacity-0 text-red-600 hover:opacity-50">{pilot.firstname} {pilot.lastname} {dist}m</p>
			</div>
		</React.Fragment>
	)
}

export default Drone