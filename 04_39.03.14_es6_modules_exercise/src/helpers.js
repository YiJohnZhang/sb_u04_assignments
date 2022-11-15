/**	choice(items)
 *	Returns a random `item`, element, from the `items`
 */
const choice = (items) => {

	const randomNumber = Math.floor(items.length*Math.random());

	return items[randomNumber];

}

/**	remove(items, item)
 *	Returns both the item and slices the first match from the array. Otherwise returns `undefined`.
 */
const remove = (items, item) => {

	const foundIndex = items.findIndex((element) => element === item);
		// this is a simultaneous search and remove


	if(foundIndex !== -1){
		const newArray = items.splice(foundIndex, 1);	//	array deletion is O(N) anyway. can't really optimize this, unless I do a simultaneous index search and deletion... while still in the array ._.
		return {item, newArray};
	}

	return undefined;

}

export {choice, remove};