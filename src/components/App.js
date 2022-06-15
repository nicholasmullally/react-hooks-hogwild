import React, {useState} from "react";
import Nav from "./Nav";
import CardContainer from "../CardContainer/CardContainer";


import hogs from "../porkers_data";

console.log(hogs)

function App() {
	const [showGreased, setShowGreased] = useState(false)
	function handleSetShowGreased() {
		setShowGreased(!showGreased)
	}


	return (
		<div className="App">
			<Nav handleSetShowGreased = {handleSetShowGreased}/>
			<CardContainer hogData={hogs}/>
		</div>
	);
}

export default App
