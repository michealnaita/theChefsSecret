import React from "react";
import "./Navigation.css";
import dp from "../dp.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="nav">
			<div className="user">
				<div className="dp">
					<img src={dp} alt="" width="150%" height="auto" />
				</div>
				<p className="username">Micheal Naita</p>
			</div>
			<p>Your recipes</p>
			<p className="active">Browse recipes</p>
			<Link to="./signin">
				<p className="signout">Sign Out</p>
			</Link>
		</div>
	);
};

export default Navigation;
