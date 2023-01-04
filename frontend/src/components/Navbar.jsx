const Navbar = ({data}) => {
	return (
		<nav className="flex bg-black h-12 text-green-800 items-center">
			<div className="inline-flex w-2/3">
				<p className="ml-4">BIRDNEST</p>
			</div>
			<div className="inline-flex ml-auto mr-5">
				<p className="mx-5">Uptime</p>
				<p className="mx-5">Track</p>
				<p className="mx-5">Refresh Rate</p>
			</div>
		</nav>
	);
}

export default Navbar