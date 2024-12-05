import { allMonths } from '../lib/dates'
import useDateStore from '../store'

export default function MonthsModal() {
	const setNewMonth = useDateStore(state => state.setNewMonth)
	const setIsMonthsModalOpen = useDateStore(state => state.setIsMonthsModalOpen)

	const handleSetMonth = e => {
		// setMonth(e.currentTatget.value)
		setNewMonth(e.currentTarget.value)
		setIsMonthsModalOpen()
	}

	return (
		<div className="absolute flex flex-col  items-center border-second h-72 border rounded-2xl  overflow-x-hidden overflow-y-auto top-14 shadow-xl shadow-second">
			{allMonths.map((month, index) => (
				<button
					className="text-lg px-20 py-3 bg-second  odd:bg-first w-full text-first odd:text-second"
					value={index}
					onClick={handleSetMonth}
					key={month}>
					{month}
				</button>
			))}
		</div>
	)
}