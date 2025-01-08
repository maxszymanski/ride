import { allMonths } from '../lib/dates'
import useDateStore from '../store'
import { SecondButton } from './Buttons'
import MonthsModal from './MonthsModal'
import YearsModal from './YearsModal'

function HistoryDates() {
	const {
		historyYear,
		historyMonth,
		isHistoryMonthsModalOpen,
		setIsHistoryMonthsModalOpen,
		isHistoryYearsModalOpen,
		setIsHistoryYearsModalOpen,
	} = useDateStore()

	const handleOpenMonthsModal = () => {
		setIsHistoryMonthsModalOpen()
		if (isHistoryYearsModalOpen) setIsHistoryYearsModalOpen()
	}
	const handleOpenYearsModal = () => {
		setIsHistoryYearsModalOpen()
		if (isHistoryMonthsModalOpen) setIsHistoryMonthsModalOpen()
	}

	return (
		<div className="relative py-2 px-4 flex items-center justify-between xl:justify-evenly">
			<SecondButton onClick={handleOpenMonthsModal} variant="min-w-48">
				{allMonths[historyMonth]}
			</SecondButton>
			<SecondButton onClick={handleOpenYearsModal} variant="">
				{historyYear}
			</SecondButton>
			{isHistoryMonthsModalOpen && <MonthsModal variant="history" />}
			{isHistoryYearsModalOpen && <YearsModal variant="history" />}
		</div>
	)
}

export default HistoryDates
