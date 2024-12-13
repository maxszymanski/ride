import { SecondButton } from '../components/Buttons'
import MonthsModal from '../components/MonthsModal'
import YearsModal from '../components/YearsModal'
import { allMonths } from '../lib/dates'
import useDateStore from '../store'
import { useGetHistoryRideByDate } from '../hooks/useGetHistoryRideByDate'
import Loading from '../components/Loading'
import DayEnd from '../components/DayEnd'

function History() {
	const { historyRide, isHistoryLoading } = useGetHistoryRideByDate()

	const homeRide = historyRide.filter(ride => ride.where === 'home')
	const workRide = historyRide.filter(ride => ride.where === 'work')
	console.log(homeRide)

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

	if (isHistoryLoading) return <Loading />

	return (
		<main>
			<div className="relative py-2 px-4 flex items-center justify-between">
				<SecondButton onClick={handleOpenMonthsModal} variant="min-w-48">
					{allMonths[historyMonth]}
				</SecondButton>
				<SecondButton onClick={handleOpenYearsModal} variant="">
					{historyYear}
				</SecondButton>
				{isHistoryMonthsModalOpen && <MonthsModal variant="history" />}
				{isHistoryYearsModalOpen && <YearsModal variant="history" />}
			</div>
			<div className="flex justify-between gap-2 mt-12 px-4 ">
				<ul className="flex flex-col">
					<li className="self-end mr-6 mb-6">Do pracy</li>
					{homeRide.map(ride => {
						return (
							<li key={ride.id} className="flex gap-3">
								<p>{ride.date}</p>
								<p>{ride.who}</p>
							</li>
						)
					})}
				</ul>
				<ul className="">
					<li className="mb-6">Do Domu</li>
					{workRide.map(ride => {
						return (
							<li key={ride.id} className="flex gap-3">
								<p>{ride.date}</p>
								<p>{ride.who}</p>
							</li>
						)
					})}
				</ul>
			</div>
		</main>
	)
}

export default History
