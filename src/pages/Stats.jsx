import HistoryDates from '../components/HistoryDates'
import Loading from '../components/Loading'
import MyPieChart from '../components/MyPieChart'
import NoData from '../components/NoData'
import { useGetHistoryRideByDate } from '../hooks/useGetHistoryRideByDate'
import { allMonths } from '../lib/dates'
import useDateStore from '../store'

function Stats() {
	const historyYear = useDateStore(state => state.historyYear)
	const historyMonth = useDateStore(state => state.historyMonth)

	const { historyRide, isHistoryLoading } = useGetHistoryRideByDate(historyYear, historyMonth)

	const daysLength = historyRide.reduce((acc, cur) => {
		if (!acc.some(item => item.date === cur.date)) {
			acc.push(cur)
		}
		return acc
	}, []).length

	const workRide = historyRide.filter(ride => ride.where === 'work').length || 0
	const daysOff = historyRide.filter(ride => ride.where === 'day-off').length || 0

	const withMix = historyRide.filter(ride => ride.who === 'mix').length
	const withMax = historyRide.filter(ride => ride.who === 'max')
	const withMaxCoast = withMax.reduce((cur, acc) => cur + acc.price, 0) + withMix * 4
	const withBus = historyRide.filter(ride => ride.who === 'bus')
	const withBusCoast = withBus.reduce((cur, acc) => cur + acc.price, 0) + withMix * 5
	const withTrain = historyRide.filter(ride => ride.who === 'train')
	const withTrainCoast = withTrain.reduce((cur, acc) => cur + acc.price, 0)

	const data = [
		{
			name: 'Maksiu',
			value: withMaxCoast,
		},
		{
			name: 'Pociąg',
			value: withTrainCoast,
		},
		{
			name: 'Bus',
			value: withBusCoast,
		},
	]

	const dataWithWhoRide = [
		{
			name: 'Maksiu',
			value: withMax?.length,
		},
		{
			name: 'Pociąg',
			value: withTrain?.length,
		},
		{
			name: 'Bus',
			value: withBus?.length,
		},
		{
			name: 'Mix',
			value: withMix,
		},
	]

	const withWhoMost = Math.max(withMax?.length, withTrain?.length, withBus?.length, withMix)
	const withWhoMostName =
		withWhoMost === withMax?.length
			? 'Z Maksiem ❤'
			: withWhoMost === withTrain?.length
			? 'Pociągiem'
			: withWhoMost === withBus?.length
			? 'Busem'
			: 'Do Zielonek'

	return (
		<>
			<HistoryDates />
			{isHistoryLoading && <Loading />}
			{historyRide.length > 0 && !isHistoryLoading ? (
				<>
					<div className="pt-7 px-4 xl:px-24">
						<h2 className="text-center text-2xl xl:py-12 xl:text-4xl">Podsumowanie</h2>
						<ul className="text-base flex flex-col gap-2.5 mt-4 ">
							<li className="mt-2">
								W miesiącu <span className="font-bold">{allMonths[historyMonth]}</span>{' '}
							</li>
							<li>
								Najczęściej podrózowałaś: <span className="font-bold">{withWhoMostName}</span>
							</li>
							<li>
								Pracowałaś: <span className="font-bold">{workRide}</span> dni
							</li>
							<li>
								Wolnych miałaś: <span className="font-bold">{daysOff}</span> dni
							</li>
							<li>
								Dla Maksia: <span className="font-bold">{withMaxCoast}</span> zł
							</li>
							<li>
								Łączna suma kosztów:{' '}
								<span className="font-bold">{withMaxCoast + withTrainCoast + withBusCoast}</span> zł
							</li>
						</ul>
					</div>
					<div className="xl:px-24 xl:my-12">
						<h3 className="text-center pt-8 pb-4 text-xl xl:mb-12 xl:text-left xl:text-2xl">
							Koszty przejazdu za <span className="font-bold">{daysLength}</span> dni
						</h3>
						<div className="flex items-center  gap-5 justify-between px-4  w-full xl:justify-evenly">
							<MyPieChart data={data} />
							<div className="text-lg flex flex-col gap-3 min-w-max xl:text-xl">
								<p className="text-[#0088FE]">Maksiu: {`${withMaxCoast}zł`}</p>
								<p className="text-[#00C49F]">Pociąg: {`${withTrainCoast}zł`}</p>
								<p className="text-[#FFBB28]">Bus: {`${withBusCoast}zł`}</p>
							</div>
						</div>
					</div>
					<div className="xl:px-24 xl:mb-12">
						<h3 className="text-center pt-8 pb-4 text-xl xl:mb-12 xl:text-left xl:text-2xl">
							Ilosć przejazdów
						</h3>
						<div className="flex items-center  gap-5 justify-between px-4  w-full xl:justify-evenly">
							<MyPieChart data={dataWithWhoRide} />
							<div className="text-lg flex flex-col gap-3 min-w-max xl:text-xl">
								<p className="text-[#0088FE]">Maksiu: {withMax?.length}</p>
								<p className="text-[#00C49F]">Pociąg: {withTrain?.length}</p>
								<p className="text-[#FFBB28]">Bus: {withBus?.length}</p>
								<p className="text-[#FF8042]">Zielonki: {`${withMix}`}</p>
							</div>
						</div>
					</div>
				</>
			) : (
				<NoData />
			)}
		</>
	)
}

export default Stats
