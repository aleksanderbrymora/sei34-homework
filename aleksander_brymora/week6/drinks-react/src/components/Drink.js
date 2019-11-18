import React, { Component } from 'react'

const Drink = (props) => {
	console.log("in the drink", props)
	props = props.data;
	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.instructions}</p>
			<img src={props.image} alt={props.name}/>
		</div>
	)
}

export default Drink;