import { useEffect } from 'react'

export default function useClickOutside(ref, mutation) {
	useEffect(() => {
		function handleClickOutside(e) {
			if (ref.current && !ref.current.contains(e.target)) {
				mutation()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, mutation])
}
