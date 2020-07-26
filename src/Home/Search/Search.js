import React from "react";
import "./Search.css";

const Search = ({ updateSearchField, fetchRecipes }) => {
	const setSearchField = () => {
		const searchInput = document.querySelector(".search-input");
		searchInput.value = "";
		fetchRecipes();
	};
	return (
		<div className="search">
			<i
				onChange={setSearchField}
				onClick={setSearchField}
				className="fas fa-search"
			></i>
			<input
				onChange={updateSearchField}
				type="text"
				placeholder="search here"
				className="search-input"
			/>
		</div>
	);
};

export default Search;
