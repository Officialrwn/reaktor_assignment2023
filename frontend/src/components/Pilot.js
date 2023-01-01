import '../assets/pilot.css' 

const Pilot = ({pilot}) => {
	const date = new Date(pilot.date).toLocaleTimeString("en-US", {
		localeMatcher: "best fit",
		timeZoneName: "short"
	});
	console.log(date);
	return (
		<div className="pilot">
			<p>
				{pilot.firstname}	{pilot.lastname} [violations: {pilot.amount}] 
			</p>
		</div>
	)
}

export default Pilot