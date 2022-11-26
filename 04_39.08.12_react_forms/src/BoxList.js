import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList(){

	const DEFAULT_BOXES = [{id: uuidv4(), width:100, height: 100, backgroundColor:'black'}];

	const [boxes, setBoxes] = useState(DEFAULT_BOXES);

	function appendBox(newBox){

		const newBoxProperties = {id:uuidv4(), ...newBox}
		const newBoxList = [...boxes, newBoxProperties];
		setBoxes(newBoxList);

	}

	function removeBox(boxID){

		const newBoxList = boxes.filter((element) => element.id !== boxID);
		setBoxes(newBoxList);

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
					deleteThisBox={() => removeBox(box.id)}
					/>
		))}

	</div>
	);

}

export default BoxList;