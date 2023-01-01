import PilotList from './PilotList.js'
import socketIO from 'socket.io-client';
import '../assets/App.css';

const socket = socketIO.connect('http://localhost:3001');

const Home = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Birdnest</h1>
				<PilotList socket={socket}/>
			</header>
		</div>
	);
}

export default Home
