import { useQuery } from '@tanstack/react-query'
import { getHistoryRideByDate } from '../lib/mutation'

export function useGetHistoryRideByDate(historyYear, historyMonth) {
	const date = `${historyYear}-${(+historyMonth + 1).toString().padStart(2, '0')}%`

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
