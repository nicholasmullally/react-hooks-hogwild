import React from "react";
import piggy from "../assets/porco.png";
import { Checkbox } from "semantic-ui-react";

const Nav = (handleSetShowGreased) => {
	return (
		<div className="navWrapper">
			<Checkbox toggle label="Filter Greased" onClick = {(handleSetShowGreased) => {}}/>
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
