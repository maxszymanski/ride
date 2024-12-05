import { allYears } from '../lib/dates'
import useDateStore from '../store'

function YearsModal() {
	const setNewYear = useDateStore(state => state.setNewYear)
	const setIsYearsModalOpen = useDateStore(state => state.setIsYearsModalOpen)

	const handleSetYear = e => {
		// setYear(e.currentTatget.value)
		setNewYear(e.currentTarget.value)
		setIsYearsModalOpen()
	}

	return (
		<div className="absolute top-14 right-2 flex flex-col  items-center border-second h-72 border rounded-2xl  overflow-x-hidden overflow-y-auto  shadow-xl shadow-second">
			{allYears.map(year => (
				<button
					className="text-lg px-20 py-3 bg-second  odd:bg-first w-full text-first odd:text-second"
					value={year}
					onClick={handleSetYear}
					key={year}>
					{year}
				</button>
			))}
		</div>
	)
}

export default YearsModal
