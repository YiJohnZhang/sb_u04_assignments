import './App.css';
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DogList from './DogList';
import DogDetails from './DogDetails';
import ColorFactory from './ColorFactory';
import NewColor from './NewColor';
import Color from './Color';

import duke from './imgs/duke.jpg';
import perry from './imgs/perry.jpg';
import tubby from './imgs/tubby.jpg';
import whiskey from './imgs/whiskey.jpg';

function App(props) {

	const [colorSet, setColorSet] = useState(props.colors);

	function findDog(dogName){

		const dogElement = props.dogs.find((element) => element.name.toLowerCase() === dogName.toLowerCase());
		return dogElement;

	}

	function findColor(colorName){
		
		const colorElement = colorSet.find((element) => element.name.toLowerCase() === colorName.toLowerCase());
		return colorElement;

	}

	function addNewColor(colorEntry){

		setColorSet([...colorSet, colorEntry]);

	}

	return (
	<div className="App">
		<Switch>
			<Route exact path="/dogs">
				<DogList dogList={props.dogs}/>
			</Route>
			{/* <Route
				path="/dogs/:name"
				render={(props) => {
					<>
						<DogDetails dogObject={findDog(props.match.params.name)}/>
						<p>asdf: {props.match}</p>
						<p>1</p>
					</>
					}} >
					https://stackoverflow.com/a/45901369
			</Route> */}
			<Route path="/dogs/:name">
				<DogDetails findDog={findDog}/>
			</Route>
			{/* <Redirect to="/dogs" /> */}
			<Route exact path="/colors">
				<ColorFactory colorList={colorSet}/>
			</Route>
			<Route exact path="/colors/new">
				<NewColor addColor={addNewColor}/>
			</Route>
			<Route path="/colors/:colorName">
				<Color findColor={findColor}/>
			</Route>
			<Redirect to="/colors" />
		</Switch>
	</div>
	);
	
}

App.defaultProps = {
	colors: [
	{
		name: 'red',
		color: '#F00'
	},
	{
		name: 'green',
		color: '#0F0'

	},
	{
		name: 'blue',
		color: '#00F'

	}
	],
	dogs: [
	{
		name: "Whiskey",
		age: 5,
		src: whiskey,
		facts: [
			"Whiskey loves eating popcorn.",
			"Whiskey is a terrible guard dog.",
			"Whiskey wants to cuddle with you!"
		]
	},
	{
		name: "Duke",
		age: 3,
		src: duke,
		facts: [
			"Duke believes that ball is life.",
			"Duke likes snow.",
			"Duke enjoys pawing other dogs."
		]
	},
	{
		name: "Perry",
		age: 4,
		src: perry,
		facts: [
			"Perry loves all humans.",
			"Perry demolishes all snacks.",
			"Perry hates the rain."
		]
	},
	{
		name: "Tubby",
		age: 4,
		src: tubby,
		facts: [
			"Tubby is really stupid.",
			"Tubby does not like walks.",
			"Angelina used to hate Tubby, but claims not to anymore."
		]
	}
	]
}

export default App;