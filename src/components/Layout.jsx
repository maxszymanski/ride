import { Outlet } from 'react-router'
import Header from './Header'
import Nav from './Nav'
import SaveModal from './SaveModal'
import useDateStore from '../store'

function Layout() {
	const isSaveModalOpen = useDateStore(state => state.isSaveModalOpen)
	return (
		<div
			className={`font-open h-screen flex flex-col bg-first text-second relative lg:flex-col-reverse lg:h-full lg:min-h-screen `}>
			<Header />
			<main className="  py-8  h-full flex-1 overflow-y-auto  lg:py-14 lg:max-w-[1440px] lg:mx-auto w-full ">
				<Outlet />
			</main>
			<Nav />
			{isSaveModalOpen && <SaveModal />}
		</div>
	)
}

export default Layout
