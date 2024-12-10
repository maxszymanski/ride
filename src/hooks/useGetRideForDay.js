import { useQuery } from '@tanstack/react-query'
import { getRideForDay } from '../lib/mutation'
import { useParams } from 'react-router'

export function useGetRideForDay() {
	const { date } = useParams()

	const {
		isLoading: isRideLoading,
		error,
		data: rideForDay = [],
	} = useQuery({
		queryKey: ['ride', date],
		queryFn: () => getRideForDay(date),
	})

	return { isRideLoading, error, rideForDay }
}
