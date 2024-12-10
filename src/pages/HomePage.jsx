import { Outlet } from 'react-router'
import Calendary from '../components/Calendary'
import DayOff from '../components/DayOff'
import Information from '../components/Information'
import SaveButton from '../components/SaveButton'
import Where from '../components/Where'
import WithWho from '../components/WithWho'
import useDateStore from '../store'

function HomePage() {
	const whereGo = useDateStore(state => state.whereGo)
	return (
		<>
			<Calendary />
			<Outlet />
		</>
	)
}

export default HomePage
