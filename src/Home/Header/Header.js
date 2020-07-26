import React from "react";
import "./Header.css";
import logo from "../logo.png";

const Header = (props) => {
	return (
		<div className="head">
			<div className="head-logo">
				<img src={logo} alt="" width="70vh" hieght="auto" />
			</div>
			<h1 className="logo-title">THE CHEF'S SECRET </h1>
		</div>
	);
};

export default Header;
