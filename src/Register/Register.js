import React from "react";
import "../Signin/Signin.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

class Register extends React.Component {
	render() {
		const handleupload = () => {
			const input = document.querySelector("#input");
			input.click();
			// console.log("clicked");
		};
		const addCheck = () => {
			const input = document.querySelector("#input");
			const check = document.querySelector(".check");
			if (input.value) {
				check.classList.add("fa-check");
			}
		};
		return (
			<div className="signin-page">
				<div className="form-register">
					<img src={logo} alt="" width="18%" hieght="auto" />
					<p className="header">REGISTER</p>
					<div className="inputs">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="name" />
					</div>
					<div className="inputs">
						<i className="fas fa-envelope"></i>
						<input type="email" placeholder="email" />
					</div>
					<div className="inputs">
						<i className="fas fa-key"></i>
						<input type="password" placeholder="password" />
					</div>
					<div
						className="inputs upload-picture"
						onClick={handleupload}
					>
						<i className="fas fa-image"></i>
						<input
							type="file"
							hidden="hidden"
							id="input"
							onChange={addCheck}
							accept=".png ,.jpg,.jpeg"
						/>
						<p className="upload">upload profile picture</p>
						<i className="fas  check"></i>
					</div>
					<div className="signinbtn">
						<Link className="link" to="/">
							<p className="p">Register</p>
						</Link>
					</div>
					<Link className="link" to="/signin">
						<p className="p register"> already have an account</p>
					</Link>
				</div>
			</div>
		);
	}
}
export default Register;
