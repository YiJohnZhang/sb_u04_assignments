import React from "react";

function DogList({dogList}){

	console.log(dogList)

	return (
	<ul>
		{dogList.map((dog) => <li><a href={`/dogs/${dog.name}`}>{dog.name}</a></li>)}
	</ul>
	);

}

export default DogList;