import React from "react";
import Home from "./Home/Home.js";
import Signin from "./Signin/Signin.js";
import Register from "./Register/Register.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AllRoutes = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signin" component={Signin} />
					<Route path="/register" component={Register} />
				</Switch>
			</div>
		</Router>
	);
};

export default AllRoutes;
