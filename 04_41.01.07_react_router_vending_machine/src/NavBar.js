import { NavLink } from 'react-router-dom';

const ACTIVE_STYLE = {

	color: '#0F0'

}

function NavBar(){
	
	return (
	<table id="navigation-bar" className='full-width'>
		
		<tr>
			<td class="nav-link-cont"><NavLink exact activeStyle={ACTIVE_STYLE} to="/">Home</NavLink></td>
			<td class="nav-link-cont"><NavLink activeStyle={ACTIVE_STYLE} to="/chips">Chips</NavLink></td>
			<td class="nav-link-cont"><NavLink activeStyle={ACTIVE_STYLE} to="/soda">Soda</NavLink></td>
			<td class="nav-link-cont"><NavLink activeStyle={ACTIVE_STYLE} to="/sardines">Sardines</NavLink></td>
		</tr>

	</table>
	)

};

// const NavBar = () => (
	
// 	<table id="navigation-bar" className='full-width'>
		
// 		<tr>
// 			<td class="nav-link-cont"><NavLink exact activeStyle={ACTIVE_STYLE} to="/">Home</NavLink></td>
// 			<td class="nav-link-cont"><NavLink activeStyle={ACTIVE_STYLE} to="/chips">Chips</NavLink></td>
// 			<td class="nav-link-cont"><NavLink activeStyle={ACTIVE_STYLE} to="/soda">Soda</NavLink></td>
// 			<td class="nav-link-cont"><NavLink activeStyle={ACTIVE_STYLE} to="/sardines">Sardines</NavLink></td>
// 		</tr>

// 	</table>

// );

export default NavBar;