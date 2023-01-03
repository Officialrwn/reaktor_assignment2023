import '../assets/pilot.css' 

const Pilot = ({pilot}) => {
	const date = new Date(pilot?.date).toLocaleTimeString("en-US", {
		localeMatcher: "best fit",
		timeZoneName: "short"
	});
	// console.log(date);
	const dist = pilot?.distance / 1000;
	return (
		<div className="pilot">
			<p className="prop">Leo Tran</p>
			<p className="prop">leo@example.net</p>
			<p className="prop">+3512321313213</p>
			<p className="prop">51.500 m</p>
			{/* <p className="prop">{pilot.firstname} {pilot.lastname}</p>
			<p className="prop">{pilot.email}</p>
			<p className="prop">{pilot.phone}</p>
			<p className="prop">{pilot.distance/1000} m</p> */}
		</div>
	)
}

export default Pilot