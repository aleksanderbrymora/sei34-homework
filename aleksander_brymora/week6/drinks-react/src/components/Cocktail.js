import React, { Component } from 'react'
import Drink from './Drink';
import SearchForm from './SearchForm';
import axios from 'axios';

class Cocktail extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			ingredients: [],
			image: '',
			instructions: ''
		};

		this.fetchCocktail = this.fetchCocktail.bind(this);
	}

	fetchCocktail(q) {
		q = q.toLowerCase();
		const cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + q;
		console.log(cocktailURL);

		axios.get(cocktailURL).then((result) => {
				// debugger
				const drinks = result.data.drinks[0];
				let ing = 1;
				const inglist = [];
				while (drinks[`strIngredient${ing}`] !== null) {
					inglist.push(drinks[`strIngredient${ing}`])
					ing++;
				}
				this.setState({
					name: drinks.strDrink,
					ingredients: inglist,
					image: drinks.strDrinkThumb,
					instructions: drinks.strInstructions
				})
				console.log(result)
				console.log(this.state);
			});
	}

	render() {
		return (
			<div>
				<h1>Drinks</h1>
				<SearchForm onSubmit={this.fetchCocktail} />
				<Drink data={this.state} />
			</div>
		);
	}
}

export default Cocktail;