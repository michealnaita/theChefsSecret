import React from "react";
import "./Recipe.css";
import Scroll from "../Scroll.js";

const Recipe = ({ image, name, ingridients }) => {
	return (
		<div className="recipe">
			<img
				className="food-image"
				alt=""
				src={image}
				hieght="250"
				width="240"
			/>

			<h1 className="recipe-name">{name}</h1>
			<div className="ingridients">
				<Scroll>
					<ol>
						{ingridients.map((ingredient) => (
							<li key={ingredient.text}>{ingredient.text}</li>
						))}
					</ol>
				</Scroll>
			</div>
		</div>
	);
};

export default Recipe;
