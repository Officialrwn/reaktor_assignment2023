import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import Navbar from './Navbar.jsx'
import Container from './Container.jsx'

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
			<Navbar/>
			<Container/>
			<Container/>
		</div>
	);
}

export default Home
