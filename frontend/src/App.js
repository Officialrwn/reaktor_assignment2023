import './App.css';
import React,	{ useState, useEffect } from 'react';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:3001');

const PilotList = ({socket}) => {
	const [pilots, setPilots] = useState([]);
	useEffect(() => {
		socket.on('messageResponse', (data) => {
			setPilots(data);
			console.log("socket data: ", data);
		})
	}, [socket]);
	
	return (
		<div>
			<p>hello</p>
		</div>
	)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<h1>Birdnest</h1>
				<PilotList socket={socket}/>
      </header>
    </div>
  );
}

export default App;
