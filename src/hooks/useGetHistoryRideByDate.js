import { useQuery } from '@tanstack/react-query'
import { getHistoryRideByDate } from '../lib/mutation'
import useDateStore from '../store'

export function useGetHistoryRideByDate() {
	const historyYear = useDateStore(state => state.historyYear)
	const historyMonth = useDateStore(state => state.historyMonth)
	const date = `${historyYear}-${(+historyMonth + 1).toString().padStart(2, '0')}%`
	console.log(date)

	const {
		isLoading: isHistoryLoading,
		error,
		data: historyRide = [],
	} = useQuery({
		queryKey: ['ride', historyYear, historyMonth],
		queryFn: () => getHistoryRideByDate(date),
	})

	return {
		isHistoryLoading,
		error,
		historyRide,
	}
}
