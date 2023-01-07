import React from "react";

const Line = () => {
	const	values = ['15', '30', '45', '60', '75', '105', '120', '135', '150', '165'];
	return (
		<React.Fragment>
			{ values && values?.map((value, index) => {
				const line = `absolute bg-lightgreen h-[500px] w-[0.7px] rotate-[${value}deg]`; 
				return <hr key={index} className={line}/>
			})}
		</React.Fragment>
	)
}

export default Line