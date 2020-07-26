import React from "react";
import "./Navigation.css";
import dp from "../dp.jpg";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="user navLinks">
					<div className="dp navLinks">
						<img src={dp} alt="" width="150%" height="auto" />
					</div>
					<p className="username navLinks">Micheal Naita</p>
				</div>
				<p className="navLinks">Your recipes</p>
				<p className="active navLinks">Browse recipes</p>
				<Link to="./signin">
					<p className="signout navLinks">Sign Out</p>
				</Link>
			</div>
		);
	}
}

export default Navigation;
