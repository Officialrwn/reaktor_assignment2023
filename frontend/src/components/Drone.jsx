import React, { useState, useEffect } from 'react'

const Drone = (pilot) => {
	const originpos = 250;
	const radius = 100;
	const posCorrection = 7.5;
	const x = ((pilot.posx - originpos + radius) / radius * originpos) - posCorrection;
	const y = ((pilot.posy - originpos + radius) / radius * originpos) - posCorrection;
	console.log(pilot)
	return (
		<React.Fragment>
			<div className={`absolute top-[340px] left-[340px] w-0 h-0 border-l-[8px] inline-flex border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-green-400`}></div>
		</React.Fragment>
	)
}

export default Drone
/* 
<div className="absolute left-[467.5px] items-center justify-center inline-flex 
w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-green-400"></div> */