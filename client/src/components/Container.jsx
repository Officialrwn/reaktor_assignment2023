import Pilot from './Pilot.jsx'
import Loading from './Loading.jsx'

const Container = ({data}) => {
	const pilots = data?.pilots;
	return (
		<div className="inline-flex h-screen w-1/3">
			<div className="w-full h-full flex flex-col">
				<div className="bg-[#455561] text-sm text-[#6C6F7F] font-bold pl-4 py-2 border-[#6C6F7F] border-x-2 border-y-2">
						List of NDZ Violations past 10 min
				</div>
				<div className="bg-[#455561] border-[#6C6F7F] border-x-2 border-y-2 w-full h-full overflow-auto shadow" id="journal-scroll">
					{ pilots?.length ? <Pilot pilots={pilots}/> : <Loading/> }
				</div>
			</div>
		</div>
	)
}

export default Container