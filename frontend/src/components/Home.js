import { useEffect, useState } from 'react';
import PilotList from './PilotList.js';
import '../assets/App.css';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:3001');

const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		socket.on('messageResponse', (data) => {
			setData(data);
			console.log("socket data: ", data);
		})
	}, [socket]);
	return (
		<div className="App-header">
			<header className="App">
				<h1 id="header">Birdnest</h1>
			</header>
				<PilotList pilots={data.pilots}/>
		</div>
	);
}

export default Home
