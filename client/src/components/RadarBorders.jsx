import React from 'react'
const RadarBorders = () => {
	return (
		<React.Fragment>
			<div className="absolute inline-flex border-2 rounded-full border-[#6D9DC5] w-[500px] h-[500px]"></div>
			<hr className="absolute inline-flex bg-[#6D9DC5] h-[520px] w-[2px]"/>
			<hr className="absolute inline-flex bg-[#6D9DC5] h-[520px] w-[2px] rotate-90"/>
		</React.Fragment>
	)
}

export default RadarBorders