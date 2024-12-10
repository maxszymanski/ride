import useDateStore from '../store'
import DayOff from './DayOff'
import SaveButton from './SaveButton'
import Where from './Where'
import WithWho from './WithWho'

function Information() {
	const active = useDateStore(state => state.active)
	const whereGo = useDateStore(state => state.whereGo)

	return (
		<>
			<Where />
			{whereGo === 'day-off' ? <DayOff /> : <WithWho />}
			<SaveButton />
		</>
	)
}

export default Information
