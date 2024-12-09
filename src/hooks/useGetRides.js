import { useQuery } from '@tanstack/react-query'
import { getRides } from '../lib/mutation'

export function useGetRides() {
	const {
		isLoading: isRidesLoading,
		error,
		data: allRide = [],
	} = useQuery({
		queryKey: ['ride'],
		queryFn: getRides,
	})

	return { isRidesLoading, error, allRide }
}
