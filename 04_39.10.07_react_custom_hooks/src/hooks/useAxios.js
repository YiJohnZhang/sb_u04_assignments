import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function useAxios(initialSet = [], minimizeStateMapping = {}){
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
			console.log(response)

			let responseData = {};
			Object.entries(minimizeStateMapping).forEach(([key, value]) => responseData[key]= eval(value));
			console.log(responseData);
				// for any Components using `useAxios`, there is an optional `minimizeStateMapping` property that provides a property name and the resource location in the response object
					// `PlayingCardList.js`, line 9 & `Pokedex.js`, line 11-16
					// 1. how do I avoid using eval??
					// 2. what might be some safe time to use `eval`?

			// Object.entries(minimizeStateMapping).forEach(([key, value]) => {
			// 	console.log(value)
			// 	console.log(key)
			// 	console.log(response.data[value])
			// 	responseData[key]= response.data[value]});
			
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