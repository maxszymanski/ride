import { useMutation } from '@tanstack/react-query'
import { login as loginApi } from '../lib/mutation'

import { useNavigate } from 'react-router'

function useLogin() {
	const navigate = useNavigate()

	const { mutate: login, isPending } = useMutation({
		mutationFn: ({ email, password }) => loginApi({ email, password }),
		onSuccess: () => {
			navigate('/')
			console.log('success')
		},
		onError: err => {
			console.log('Error', err)
		},
	})
	return { login, isPending }
}
export default useLogin
