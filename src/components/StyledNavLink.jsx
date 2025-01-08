import { NavLink } from 'react-router'

function StyledNavLink({ children, to }) {
	return (
		<li className="p-4 ">
			<NavLink
				to={to}
				className={({ isActive }) =>
					`duration-300 transition-colors xl:hover:text-second ${isActive ? 'text-second' : 'text-second/70'}`
				}>
				{children}
			</NavLink>
		</li>
	)
}

export default StyledNavLink
