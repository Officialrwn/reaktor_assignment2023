import feather from '../assets/feather-pointed-solid.svg';
import server from '../assets/server.svg';
import up from '../assets/up.svg';
import expand from '../assets/expand.svg'
import refresh from '../assets/refresh.svg'
import clock from '../assets/clock.svg'

const Navbar = ({data}) => {
	const range = data?.deviceInfo?.listenRange[0] / 1000;
	const rate = data?.deviceInfo?.updateIntervalMs / 1000;
	const deviceId = data?.deviceInfo?.$.deviceId;
	const uptime = data?.deviceInfo?.uptimeSeconds;
	
	return (
		<nav className=" bg-[#313E50] border-[#6C6F7F] border-b-2 h-12 text-[#6C6F7F] items-center flex">
			<div className="inline-flex w-2/3 text-[#6C6F7F]">
				<img className="pt-1 ml-4 max-h-5" src={feather} alt={feather}/>
				<p className="ml-2 font-extrabold">Monadikuikka NDZ</p>
			</div>
			<div className="inline-flex w-1/3 ml-auto items-center text-sm justify-end" id="icons">
				<div className="inline-flex items-center font-extrabold">
					<img className="max-h-3" src={up} alt={up}/>
					<img className="max-h-4 mr-1.5" src={server} alt={server}/>
					<p className={!deviceId ? "text-[#6C6F7F]" : ""}>{deviceId ? deviceId : "OFFLINE"}</p>
				</div>
				<div className="inline-flex items-center">
					<img className="ml-10 max-h-6" src={clock} alt={clock}/>
					<p className="pl-1 font-extrabold">{uptime ? uptime : 0}s</p>
				</div>
				<div className="inline-flex items-center">
					<img className="ml-4 max-h-4" src={expand} alt={expand}/>
					<p className="pl-1 font-extrabold">{range ? range.toFixed(1) : 0}m</p>
				</div>
				<div className="inline-flex items-center">
					<img className="ml-8 max-h-5" src={refresh} alt={refresh}/>
					<p className="pl-2 mr-3 font-extrabold">{rate ? rate.toFixed(1) : 0}s</p>
				</div>
			</div>
		</nav>
	);
}

export default Navbar