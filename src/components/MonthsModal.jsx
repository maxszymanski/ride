import { useRef } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import { allMonths } from '../lib/dates'
import useDateStore from '../store'

export default function MonthsModal({ variant = 'today' }) {
	const setNewMonth = useDateStore(state => state.setNewMonth)
	const setIsMonthsModalOpen = useDateStore(state => state.setIsMonthsModalOpen)
	const setNewHistoryMonth = useDateStore(state => state.setNewHistoryMonth)
	const setIsHistoryMonthsModalOpen = useDateStore(state => state.setIsHistoryMonthsModalOpen)
	const modalRef = useRef(null)
	const modalHistoryRef = useRef(null)
	useClickOutside(modalRef, setIsMonthsModalOpen)
	useClickOutside(modalHistoryRef, setIsHistoryMonthsModalOpen)

	const handleSetMonth = e => {
		setNewMonth(e.currentTarget.value)
		setIsMonthsModalOpen()
	}
	const handleSetHistoryMonth = e => {
		setNewHistoryMonth(e.currentTarget.value)
		setIsHistoryMonthsModalOpen()
	}

	return (
		<div
			className="absolute flex flex-col  items-center border-second h-72 border rounded-2xl  overflow-x-hidden overflow-y-auto top-14 shadow-xl shadow-second z-40 scrollbar-none xl:h-96 xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:w-96"
			ref={variant === 'today' ? modalRef : modalHistoryRef}>
			{allMonths.map((month, index) => (
				<button
					className="text-lg px-20 py-3 bg-second   odd:bg-first w-full text-first odd:text-second duration-300 transition-colors odd:hover:bg-gray-200 hover:bg-[#0e0d0d] "
					value={index}
					onClick={variant === 'today' ? handleSetMonth : handleSetHistoryMonth}
					key={month}>
					{month}
				</button>
			))}
		</div>
	)
}
