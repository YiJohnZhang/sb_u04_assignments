const ColorFactory = ({colorList}) => (
	<div>
		<p>Welcome to the color factory</p>
		<a href="/colors/new">Add a Color</a>
		<ul>
			{colorList.map((colorEntry) => <li><a href={`/colors/${colorEntry.name}`}>{colorEntry.name.toLowerCase()}</a></li>)}
		</ul>
	</div>
	);

export default ColorFactory;