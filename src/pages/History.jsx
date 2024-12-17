import useDateStore from '../store'
import { useGetHistoryRideByDate } from '../hooks/useGetHistoryRideByDate'
import Loading from '../components/Loading'
import HistoryDates from '../components/HistoryDates'
import NoData from '../components/NoData'

function History() {
	const historyYear = useDateStore(state => state.historyYear)
	const historyMonth = useDateStore(state => state.historyMonth)

	const { historyRide, isHistoryLoading } = useGetHistoryRideByDate(historyYear, historyMonth)

	const workRide = historyRide.filter(ride => ride.where === 'work').length || 0
	const daysOff = historyRide.filter(ride => ride.where === 'day-off').length || 0

	if (isHistoryLoading) return <Loading />

	return (
		<main>
			<HistoryDates />
			{historyRide.length > 0 && !isHistoryLoading ? (
				<>
					<div className="flex justify-between px-12 py-8">
						<div className="text-center">
							<p className="mb-3">Dni pracujące</p>
							<p className="font-bold text-xl">{workRide}</p>
						</div>

						<div className="text-center">
							<p className="mb-3">Dni wolne</p>
							<p className="font-bold text-xl">{daysOff}</p>
						</div>
					</div>

					<ul className="flex flex-col   divide-third divide-y-2 w-full  border-t-2 border-third">
						{historyRide.map(ride => {
							const { id, date, who, where } = ride
							const whereGo =
								where === 'work'
									? 'Do pracy'
									: where === 'home'
									? 'Do domu'
									: where === 'day-off'
									? '-'
									: ''

							const withWhoGo =
								who === 'train'
									? 'Pociąg'
									: who === 'max'
									? 'Maksiu'
									: who === 'bus'
									? 'Bus'
									: who === 'mix'
									? 'Bus + Maksiu'
									: who === 'day-off'
									? 'Wolne'
									: ''

							return (
								<li
									key={id}
									className={`flex justify-between gap-3 text-base py-5 px-4 items-center  ${
										where === 'work' ? 'bg-red-100' : where === 'home' ? 'bg-green-100' : 'bg-first'
									}  `}>
									<p className="w-1/3 text-center">{date}</p>
									<p className="w-1/3 text-center">{whereGo}</p>
									<p className="w-1/3 text-center">{withWhoGo}</p>
								</li>
							)
						})}
					</ul>
				</>
			) : (
				<NoData />
			)}
		</main>
	)
}

export default History
