
const Pilot = ({pilot}) => {
	const date = new Date(pilot?.date).toLocaleTimeString("en-US", {
		localeMatcher: "best fit",
		timeZoneName: "short"
	});
	// console.log(date);
	const dist = pilot?.distance / 1000;
	return (
		<div className="bg-gray-100 m-2 p-1 relative">
			<p className="">Leo Tran</p>
			<p className="">E: leo@example.net</p>
			<p className="absolute right-3 bottom-1">P: +3512321313213</p>
			<p className="absolute right-3 top-1">51.500 m</p>
			{/* <p className="prop">{pilot.firstname} {pilot.lastname}</p>
			<p className="prop">{pilot.email}</p>
			<p className="prop">{pilot.phone}</p>
			<p className="prop">{pilot.distance/1000} m</p> */}
		</div>
	)
}

export default Pilot