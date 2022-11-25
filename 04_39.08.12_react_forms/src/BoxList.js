import React, {useState} from 'react';
// import {v4 as uuidv4} from 'uuid';	
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList(){

	const DEFAULT_BOXES = [{id: uuidv4(), width:10, height: 10, backgroundColor:'black'}];

	[boxes, setBoxes] = useState(DEFAULT_BOXES);

	function appendBox(boxParameters){


	}

	function removeBox(boxId){



	}

	return(
	<div>
		<NewBoxForm createNewBox={appendBox}/>
		{
			boxes.map((box) => (
				<Box
					key={box.id}
					width={box.width}
					height={box.height}
					backgroundColor={box.backgroundColor}
					/>
		))}

	</div>
	);

}