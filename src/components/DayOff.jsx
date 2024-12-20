import { useGetRideForDay } from '../hooks/useGetRideForDay'

function DayOff() {
	const { rideForDay } = useGetRideForDay()
	console.log(rideForDay)
	return (
		<div className="px-4 mb-8 mt-12 text-center text-2xl lg:mt-20 lg:text-4xl">
			<p>Miłego odpoczynku! ❤</p>
		</div>
	)
}

export default DayOff
