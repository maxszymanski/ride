import { useRef } from 'react'
import { allYears } from '../lib/dates'
import useDateStore from '../store'
import useClickOutside from '../hooks/useClickOutside'

function YearsModal({ variant = 'today' }) {
	const setNewYear = useDateStore(state => state.setNewYear)
	const setIsYearsModalOpen = useDateStore(state => state.setIsYearsModalOpen)
	const setIsHistoryYearsModalOpen = useDateStore(state => state.setIsHistoryYearsModalOpen)
	const setNewHistoryYear = useDateStore(state => state.setNewHistoryYear)
	const modalRef = useRef(null)
	const modalHistoryRef = useRef(null)
	useClickOutside(modalRef, setIsYearsModalOpen)
	useClickOutside(modalHistoryRef, setIsHistoryYearsModalOpen)

	const handleSetYear = e => {
		setNewYear(e.currentTarget.value)
		setIsYearsModalOpen()
	}
	const handleSetHistoryYear = e => {
		setNewHistoryYear(e.currentTarget.value)
		setIsHistoryYearsModalOpen()
	}

	return (
		<div
			className="absolute top-14 right-2 flex flex-col  items-center border-second h-72 border rounded-2xl  overflow-x-hidden overflow-y-auto z-40 shadow-xl shadow-second scrollbar-none xl:h-96 xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:w-96"
			ref={variant === 'today' ? modalRef : modalHistoryRef}>
			{allYears.map(year => (
				<button
					className="text-lg px-20 py-3 bg-second  odd:bg-first w-full text-first odd:text-second duration-300 transition-colors odd:hover:bg-gray-200 hover:bg-[#0e0d0d]"
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
