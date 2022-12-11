import React from "react";
import { useParams } from "react-router-dom";

function Color({findColor}){

	const params = useParams();
	const {name, color} = findColor(params.colorName);

	


	return(
	<div style={{backgroundColor: color}}>
		<p>This is {name}</p>
	</div>
	);

}

export default Color;