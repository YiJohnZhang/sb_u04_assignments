import { Link } from 'react-router-dom';

const ColorFactory = ({colorList}) => (
	<div>
		<p>Welcome to the color factory</p>
		<Link to="/colors/new">Add a Color</Link>
		<ul>
			{colorList.map((colorEntry) => (
				<li><Link to={`/colors/${colorEntry.colorName}`}>{colorEntry.colorName}</Link></li>
			))}
		</ul>
	</div>
	);

export default ColorFactory;