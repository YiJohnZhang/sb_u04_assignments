const Person = ({id, personName, age, hobbies}) => (
	<div key={id}>
		<h3>{personName.length > 8 ? `${personName.substring(0, 7)}...` : personName}</h3>
		<h3>{age >= 18 ? 'Over 18!' : 'Not over 18.'}</h3>
		<p></p>
		<ul>
			{hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
		</ul>
	</div>	
);