import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Calendary from '../components/Calendary'
import DayOff from '../components/DayOff'
import Information from '../components/Information'
import SaveButton from '../components/SaveButton'
import Where from '../components/Where'
import WithWho from '../components/WithWho'
import useDateStore from '../store'

function HomePage() {
	const active = useDateStore(state => state.active)
	const navigate = useNavigate()

	useEffect(() => {
		navigate(active)
	}, [active, navigate])

	return (
		<>
			<Calendary />
			<Outlet />
		</>
	)
}

export default HomePage
