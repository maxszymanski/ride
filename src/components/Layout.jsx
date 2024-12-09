import { Outlet } from 'react-router'
import Header from './Header'
import Nav from './Nav'
import SaveModal from './SaveModal'
import useDateStore from '../store'

function Layout() {
	const isSaveModalOpen = useDateStore(state => state.isSaveModalOpen)
	return (
		<div className={`font-open h-screen flex flex-col bg-first text-second relative `}>
			<Header />
			<main className="  py-8  flex-col h-full flex-1 overflow-y-auto">
				<Outlet />
			</main>
			<Nav />
			{isSaveModalOpen && <SaveModal />}
		</div>
	)
}

export default Layout
