import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../lib/mutation'

export function useUser() {
	const {
		isLoading,
		data: user,
		fetchStatus,
	} = useQuery({
		queryKey: ['user'],
		queryFn: getCurrentUser,
	})
	return {
		user,
		isLoading,
		isAuthenticated: user?.role === 'authenticated',
		fetchStatus,
	}
}
