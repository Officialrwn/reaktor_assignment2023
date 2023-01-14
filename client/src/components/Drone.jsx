import React from 'react'

const Drone = ({pilot}) => {
	const posCorrection = 7.5;
	const x = pilot.posx - posCorrection;
	const y = pilot.posy - posCorrection;
	const line = "absolute z-40 w-0 h-0 border-l-[6px] inline-flex border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-[#6D9DC5]";
	const ping = "absolute opacity-75 z-40 w-0 h-0 border-l-[8px] inline-flex border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-[#3066BE]";
	const dist = parseFloat(pilot.distance).toFixed(2);
	return (
		<React.Fragment>
			<div style={{left: `${x}px`, top: `${y}px`}} className={line}>
				<p className="p-1 absolute w-[9vw] inline-flex bg-[#313E50] border-[#3066BE] border-2 z-50 opacity-0 text-[#6D9DC5] hover:opacity-90">{pilot.firstname} {pilot.lastname} {dist}m</p>
			</div>
			<div style={{left: `${x-2}px`, top: `${y-2}px`}} id="ping" className={ping}></div>
		</React.Fragment>
	)
}

export default Drone