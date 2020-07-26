import React from "react";
import "./Signin.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";
class Signin extends React.Component {
	render() {
		return (
			<div className="signin-page">
				<div className="form">
					<img src={logo} alt="" width="22%" hieght="auto" />
					<p className="header">SIGN IN</p>
					<div className="inputs">
						<i class="fas fa-envelope"></i>
						<input type="email" placeholder="email" id />
					</div>
					<div className="inputs">
						<i class="fas fa-key"></i>
						<input type="password" placeholder="password" id />
					</div>
					<div className="signinbtn">
						<Link className="link" to="/">
							<p className="p">SIGN IN</p>
						</Link>
					</div>
					<Link className="link" to="/register">
						<p className="register">registered?</p>
					</Link>
				</div>
			</div>
		);
	}
}
export default Signin;
