import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function useAxios(initialSet = [], minimizeStateMapping = {}/*resourceURL, options = {}*/){
	// use axios instead of JS-native fetch API
	// I am confused
	// ok, not very much "useAxios" rather than "appendAxiosCallToState", because all the assignment asks is to do an Axios call rather than a useEffect instance and then append to list of state ._.

	const [set, setSet] = useState(initialSet);

	async function appendResource(resourceBaseURL, options = {}) {

		// evt.preventDefault();

		let response;
		const {pathString, queryString} = options;

		let resourceURL = resourceBaseURL;
		resourceURL = pathString ? resourceURL.concat('/', pathString) : resourceURL;
		resourceURL = queryString ? resourceURL.concat('?', queryString) : resourceURL;
		

		try{

			response = await axios.get(resourceURL);

			let responseData = {};
			for(const [key, value] of Object.entries(minimizeStateMapping)){
				console.log(value);	// how do I prevent it from executing?
				console.log(key);
				console.log(response.data);
				console.log(eval(value));	// how to avoid eval?


			}

			// Object.entries(minimizeStateMapping).forEach(([key, value]) => {
			// 	console.log(value)
			// 	console.log(key)
			// 	console.log(response.data[value])
			// 	responseData[key]= response.data[value]});
			// console.log(responseData);

			// setSet((set) => [...set, { ...response.data, id: uuidv4() }]);
			setSet((set) => [...set, { ...response.data, id: uuidv4() }]);

		}catch(error){

			console.error(error);

		}

	}

	function resetSet(){
	
		setSet([]);
	
	}

	return [set, appendResource, resetSet];
		// the benefit of using array is that naming is flexible

}

export default useAxios;