import React from "react";
import { useParams, Link } from "react-router-dom";

function Color({findColor}){

	const params = useParams();
	const {colorName, color} = findColor(params.colorName);

	return(
	<div style={{backgroundColor: color}}>
		<p>This is {colorName}.</p>
		<Link to="/colors">Go Back</Link>
	</div>
	);

}

export default Color;