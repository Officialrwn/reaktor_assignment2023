import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

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
			<p>test</p>
		</div>
	);
}

export default Home
