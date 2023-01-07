import React from "react";

const Line = () => {
	const values = [15, 30, 45, 60, 75, 105, 120, 135, 150, 165];
	return (
		<React.Fragment>
			{ values && values.map((value, index) => {
				const line = `absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[${value}deg]`; 
				return <hr key={index} className={line}/>
			})}
			{/* <hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[15deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[30deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[45deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[60deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[75deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[105deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[120deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[135deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[150deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[165deg]"/> */}
		</React.Fragment>
	)
}

export default Line