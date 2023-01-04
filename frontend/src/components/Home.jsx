import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import Navbar from './Navbar.jsx'
import Container from './Container.jsx'
import Map from './Map.jsx'

const socket = socketIO.connect('http://localhost:3001');

const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		socket.on('messageResponse', (data) => {
			setData(data);
		})
	}, []);
	console.log("socket data: ", data);
	return (
		<div>
			<Navbar data={data}/>
			<Map data={data}/>
			<Container data={data}/>
		</div>
	);
}

export default Home
