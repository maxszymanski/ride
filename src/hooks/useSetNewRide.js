import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setRide } from '../lib/mutation'

export function useSetNewRide() {
	const queryClient = useQueryClient()
	const { mutate: addRide, isPending: isAdingRide } = useMutation({
		mutationFn: newRide => setRide(newRide),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['ride'],
			})
			await queryClient.refetchQueries({ queryKey: ['user'] })
		},
	})
	return { addRide, isAdingRide }
}
