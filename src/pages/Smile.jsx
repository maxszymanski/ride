import { NavLink } from 'react-router'
import Spinner from '../components/Spinner'
import { useUser } from '../hooks/useUser'
import { messages } from '../lib/dates'

function Smile() {
	const { isLoading, isAuthenticated } = useUser()
	const id = new Date().getDate() - 1
	const text = messages[id].message

	if (isLoading)
		return (
			<div className="flex-1 h-full flex items-center justify-center">
				<Spinner />
			</div>
		)

	if (!isAuthenticated)
		return (
			<div className="flex-1 h-full flex items-center justify-center text-center px-12 flex-col gap-8 text-xl xl:mt-36 xl:text-2xl xl:gap-16 ">
				<p className=" leading-8 xl:leading-10">
					Ups! <br /> Ta sekcja jest dostępna tylko dla administratorów.
				</p>
				<NavLink
					to="/login"
					className="bg-second py-2 px-8 text-xl text-first rounded-full hover:bg-second/80 transition-colors duration-300">
					Zaloguj się
				</NavLink>
			</div>
		)

	return (
		<div className="px-4 flex  flex-col items-center justify-center h-full text-3xl text-center gap-8">
			<p className="text-red-700 text-5xl">❤❤❤</p>
			<p className="leading-[3.2rem]">{text}</p>
			<p className="text-red-700 text-5xl">❤❤❤</p>
		</div>
	)
}

export default Smile
