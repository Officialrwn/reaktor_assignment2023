import React from "react";

const Line = ({value}) => {
	const line = `absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[${value}deg]`; 
	return (
		<React.Fragment>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[15deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[30deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[45deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[60deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[75deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[105deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[120deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[135deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[150deg]"/>
			<hr className="absolute bg-lightgreen h-[450px] w-[0.7px] rotate-[165deg]"/>
		</React.Fragment>
	)
}

export default Line