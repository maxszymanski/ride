import { useQuery } from '@tanstack/react-query'
import { getRideForDay } from '../lib/mutation'
import { useParams } from 'react-router'

export function useGetRideForDay(forButton = null) {
	const { date } = useParams()

	const currentDay = date || forButton

	const {
		isLoading: isRideLoading,
		error,
		data: rideForDay = [],
	} = useQuery({
		queryKey: ['ride', date],
		queryFn: () => getRideForDay(currentDay),
	})

	return { isRideLoading, error, rideForDay }
}
