import { allMonths } from '../lib/dates'
import useDateStore from '../store'

export default function MonthsModal({ variant = 'today' }) {
	const setNewMonth = useDateStore(state => state.setNewMonth)
	const setIsMonthsModalOpen = useDateStore(state => state.setIsMonthsModalOpen)
	const setNewHistoryMonth = useDateStore(state => state.setNewHistoryMonth)
	const setIsHistoryMonthsModalOpen = useDateStore(state => state.setIsHistoryMonthsModalOpen)

	const handleSetMonth = e => {
		setNewMonth(e.currentTarget.value)
		setIsMonthsModalOpen()
	}
	const handleSetHistoryMonth = e => {
		setNewHistoryMonth(e.currentTarget.value)
		setIsHistoryMonthsModalOpen()
	}

	return (
		<div className="absolute flex flex-col  items-center border-second h-72 border rounded-2xl  overflow-x-hidden overflow-y-auto top-14 shadow-xl shadow-second">
			{allMonths.map((month, index) => (
				<button
					className="text-lg px-20 py-3 bg-second  odd:bg-first w-full text-first odd:text-second"
					value={index}
					onClick={variant === 'today' ? handleSetMonth : handleSetHistoryMonth}
					key={month}>
					{month}
				</button>
			))}
		</div>
	)
}
