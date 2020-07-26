import React from "react";
import Navigation from "./Navigation/Navigation.js";
import View from "./View/View.js";
import Header from "./Header/Header.js";
import Search from "./Search/Search.js";
import "./Home.css";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			auth: true,
			searchfield: "",
			recipes: [],
		};
		this.viewElement = React.createRef();
	}
	updateSearchField = (e) => {
		this.setState({
			searchfield: e.target.value,
		});
	};
	fetchRecipes = () => {
		this.getRecipes();
	};
	getRecipes = async () => {
		const appId = "1f4af0eb";
		const appKey = "e35d773ddadbbfae9e3be51e4e8921b4";
		const response = await fetch(
			`https://api.edamam.com/search?q=${this.state.searchfield}&app_id=${appId}&app_key=${appKey}`
		);
		const data = await response.json();
		const recipes = data.hits;
		this.setState({
			recipes: recipes,
		});
	};
	componentDidUpdate() {
		this.viewElement.current.updateRecipes();
	}

	render() {
		return (
			<div className="body">
				<Header className="head" />
				<Navigation className="nav" />
				<Search
					className="search"
					updateSearchField={this.updateSearchField}
					fetchRecipes={this.fetchRecipes}
				/>
				<View
					ref={this.viewElement}
					className="view"
					recipes={this.state.recipes}
				/>
			</div>
		);
	}
}

export default Home;
