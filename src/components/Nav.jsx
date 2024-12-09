import { FaRegFaceSmileBeam } from 'react-icons/fa6'
import { IoHomeSharp, IoStatsChart } from 'react-icons/io5'
import { LuHistory } from 'react-icons/lu'
import StyledNavLink from './StyledNavLink'

function Nav() {
	return (
		<ul className="px-4 flex bg-third text-second/60 justify-between items-center">
			<StyledNavLink to="/">
				<IoHomeSharp className="size-7" />
			</StyledNavLink>

			<StyledNavLink to="stats">
				<IoStatsChart className="size-7" />
			</StyledNavLink>

			<StyledNavLink to="history">
				<LuHistory className="size-7" />
			</StyledNavLink>

			<StyledNavLink to="smile">
				<FaRegFaceSmileBeam className="size-7" />
			</StyledNavLink>
		</ul>
	)
}

export default Nav
