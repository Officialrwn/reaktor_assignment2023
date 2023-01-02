import '../assets/pilot.css' 

const Pilot = ({pilot}) => {
	const date = new Date(pilot.date).toLocaleTimeString("en-US", {
		localeMatcher: "best fit",
		timeZoneName: "short"
	});
	console.log(date);
	const dist = pilot.distance / 1000;
	return (
		<div className="pilot">
			<p>
				{pilot.firstname}	{pilot.lastname} [closest distance: {dist}m] 
			</p>
		</div>
	)
}

export default Pilot