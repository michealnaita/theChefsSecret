import React from "react";
import "./View.css";
import Recipe from "../Recipe/Recipe.js";
import Scroll from "../Scroll.js";

class View extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [],
		};
	}
	updateRecipes = () => {
		this.setState({
			recipes: this.props.recipes,
		});
	};
	render() {
		if (this.state.recipes.length > 0) {
			return (
				<div className="view">
					<Scroll>
						<div className="recipes">
							{this.state.recipes.map((recipe) => (
								<Recipe
									key={recipe.recipe.label}
									name={recipe.recipe.label}
									ingridients={recipe.recipe.ingredients}
									image={recipe.recipe.image}
								/>
							))}
						</div>
					</Scroll>
				</div>
			);
		} else {
			return (
				<div className="view">
					{" "}
					<h1>Browse Recipes here...</h1>
				</div>
			);
		}
	}
}

export default View;
