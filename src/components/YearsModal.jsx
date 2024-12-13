import { allYears } from '../lib/dates'
import useDateStore from '../store'

function YearsModal({ variant = 'today' }) {
	const setNewYear = useDateStore(state => state.setNewYear)
	const setIsYearsModalOpen = useDateStore(state => state.setIsYearsModalOpen)
	const setNewHistoryYear = useDateStore(state => state.setNewHistoryYear)
	const setIsHistoryYearsModalOpen = useDateStore(state => state.setIsHistoryYearsModalOpen)

	const handleSetYear = e => {
		setNewYear(e.currentTarget.value)
		setIsYearsModalOpen()
	}
	const handleSetHistoryYear = e => {
		setNewHistoryYear(e.currentTarget.value)
		setIsHistoryYearsModalOpen()
	}

	return (
		<div className="absolute top-14 right-2 flex flex-col  items-center border-second h-72 border rounded-2xl  overflow-x-hidden overflow-y-auto  shadow-xl shadow-second">
			{allYears.map(year => (
				<button
					className="text-lg px-20 py-3 bg-second  odd:bg-first w-full text-first odd:text-second"
					value={year}
					onClick={variant === 'today' ? handleSetYear : handleSetHistoryYear}
					key={year}>
					{year}
				</button>
			))}
		</div>
	)
}

export default YearsModal
