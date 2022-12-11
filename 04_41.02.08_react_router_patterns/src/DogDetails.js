import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

function DogDetails({findDog}){

	const params = useParams()
	const {name, age, src, facts} = findDog(params.name)

	// const INITIAL_DOG_DATA = {
	// 	name: '',
	// 	age: 0,
	// 	src: '',
	// 	facts: []
	// }

	// let dogData = INITIAL_DOG_DATA;
	// const {name} = useParams();

	// useEffect(() => {

	// 	dogData = findDog(name);
	// 	console.log(dogData)

	// }, [name]);

	return (
	<div>
		<h1>{name}</h1>
		<p><strong>Age</strong>: {age}</p>
		<img src={src}/>
		<ul>
			{facts.map((entry) => <li>{entry}</li>)}
		</ul>
	</div>
	);

}

export default DogDetails;