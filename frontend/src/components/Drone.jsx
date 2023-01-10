import React from 'react'

const Drone = ({pilot}) => {
	const originpos = 250;
	const radius = 100;
	const posCorrection = 7.5;
	const x = ((pilot.posx - originpos + radius) / radius * originpos) - posCorrection;
	const y = ((pilot.posy - originpos + radius) / radius * originpos) - posCorrection;
	const line = "absolute w-0 h-0 border-l-[8px] inline-flex border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-green-400";
	return (
		<React.Fragment>
			<div style={{left: `${x}px`, top: `${y}px`}} className={line}></div>
		</React.Fragment>
	)
}

export default Drone