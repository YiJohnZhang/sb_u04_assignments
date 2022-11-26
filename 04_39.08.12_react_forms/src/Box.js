import React from 'react';

function Box({width, height, backgroundColor, deleteThisBox}){

	const boxStyle = {width, height, backgroundColor}

	return(

		<div style={boxStyle}>

			<button onClick={deleteThisBox}>x</button>

		</div>

	);

}

export default Box;