import { NavLink } from 'react-router-dom';

const ACTIVE_STYLE = {

	color: '#0F0'

}

const NavBar = () => (
	
	<div id="navigation-bar wide">

		<NavLink exact activeStyle={ACTIVE_STYLE} to="/">Home</NavLink>
		<NavLink activeStyle={ACTIVE_STYLE} to="/chips">Chips</NavLink>
		<NavLink activeStyle={ACTIVE_STYLE} to="/soda">Soda</NavLink>
		<NavLink activeStyle={ACTIVE_STYLE} to="/sardines">Sardines</NavLink>

	</div>

);

export default NavBar;