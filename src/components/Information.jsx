import { useGetRideForDay } from '../hooks/useGetRideForDay'
import useDateStore from '../store'
import DayEnd from './DayEnd'
import DayOff from './DayOff'
import Loading from './Loading'
import SaveButton from './SaveButton'
import Where from './Where'
import WithWho from './WithWho'

function Information() {
	const active = useDateStore(state => state.active)
	const whereGo = useDateStore(state => state.whereGo)

	const { rideForDay, isRideLoading } = useGetRideForDay()

	const rideHome = rideForDay.filter(r => r.where === 'home')[0]?.where === 'home'
	const rideWork = rideForDay.filter(r => r.where === 'work')[0]?.where === 'work'
	const dayOff = rideForDay.filter(r => r.where === 'day-off')[0]?.where === 'day-off'

	const disabledHome = whereGo === rideForDay.filter(r => r.where === 'home')[0]?.where
	const disabledWork = whereGo === rideForDay.filter(r => r.where === 'work')[0]?.where

	const chooseWhereGo = disabledHome || disabledWork

	const dayEnd = (rideHome && rideWork) || dayOff

	if (isRideLoading) return <Loading />

	if (dayEnd) return <DayEnd ride={rideForDay} />

	if (!dayEnd)
		return (
			<>
				<Where rideHome={rideHome} rideWork={rideWork} />
				{whereGo === 'day-off' ? <DayOff /> : <WithWho />}
				<SaveButton chooseWhereGo={chooseWhereGo} />
			</>
		)
}

export default Information
