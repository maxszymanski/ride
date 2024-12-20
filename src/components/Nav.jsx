import { FaRegFaceSmileBeam } from 'react-icons/fa6'
import { IoHomeSharp, IoStatsChart } from 'react-icons/io5'
import { LuHistory } from 'react-icons/lu'
import StyledNavLink from './StyledNavLink'
import { NavLink } from 'react-router'

function Nav() {
	return (
		<nav className="px-4  bg-third text-second/60 lg:py-2 ">
			<div className="lg:max-w-[1440px] lg:mx-auto lg:flex lg:justify-between lg:px-24">
				<NavLink to="/" className="hidden lg:block">
					<img src="/icons/car64.png" />
				</NavLink>
				<ul className=" flex justify-between items-center lg:gap-12">
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
			</div>
		</nav>
	)
}

export default Nav
