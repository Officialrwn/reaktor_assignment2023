// import '../assets/pilot.css' 

const Pilot = ({pilot}) => {
	const date = new Date(pilot?.date).toLocaleTimeString("en-US", {
		localeMatcher: "best fit",
		timeZoneName: "short"
	});
	// console.log(date);
	const dist = pilot?.distance / 1000;
	return (
		<div className="pilot">
			<p>Leo Tran</p>
			<p>leo@example.net</p>
			<p>+3512321313213</p>
			<p>51.500 m</p>
			{/* <p className="prop">{pilot.firstname} {pilot.lastname}</p>
			<p className="prop">{pilot.email}</p>
			<p className="prop">{pilot.phone}</p>
			<p className="prop">{pilot.distance/1000} m</p> */}
		</div>
	)
}

export default Pilot