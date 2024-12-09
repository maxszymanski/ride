import { useGetRides } from '../hooks/useGetRides'

function History() {
	const { allRide } = useGetRides()

	return (
		<ul>
			{allRide.map(ride => (
				<li key={ride.id} className="flex gap-3">
					<p>{ride.date}</p>
					<p>{ride.who}</p>
					<p>{ride.where}</p>
				</li>
			))}
		</ul>
	)
}

export default History
