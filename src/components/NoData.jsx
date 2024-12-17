import { allMonths } from '../lib/dates'
import useDateStore from '../store'

function NoData() {
	const historyMonth = useDateStore(state => state.historyMonth)
	return (
		<div className="h-full flex-col pt-7 px-4 flex items-center justify-center text-center mt-12 text-xl ">
			<p>
				Brak danych do wyswietlenia za miesiąc <br />
			</p>
			<p className="mt-4 font-bold">{allMonths[historyMonth]}</p>
		</div>
	)
}

export default NoData
