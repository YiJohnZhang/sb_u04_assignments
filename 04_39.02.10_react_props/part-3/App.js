const personCollection = [
	{id:1, personName:"John", age:16, hobbies:["I", "am", "very"]},
	{id:2, personName:"Jacob", age:18, hobbies:["tired", "right", "now."]},
	{id:3, personName:"SomeGibberish", age:21, hobbies:["Send", "help."]}
];

const App = () => (
	<div>
		{/* {id, personName, age, hobbies} */}
		{personCollection.map((person) => (
			<Person id={person.id} personName={person.personName} age={person.age} hobbies={person.hobbies}/>
			// Does there exist a way to destructure it into the Component?
			)
		)}
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));