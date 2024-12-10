import { useParams } from 'react-router'
import useDateStore from '../store'
import { Button } from './Buttons'
import { useGetRideForDay } from '../hooks/useGetRideForDay'

function Where() {
	const whereGo = useDateStore(state => state.whereGo)
	const setWhereGo = useDateStore(state => state.setWhereGo)
	const { rideForDay } = useGetRideForDay()

	const rideHome = rideForDay.filter(r => r.where === 'home')
	const rideWork = rideForDay.filter(r => r.where === 'work')

	console.log(rideHome)

	return (
		<div className="px-4 my-6">
			<h2 className="text-xl font-thin mb-8">Gdzie jedziemy? </h2>
			<div className="flex items-center justify-center gap-4 w-full ">
				<Button
					active={whereGo === 'home'}
					value="home"
					onClick={() => setWhereGo('home')}
					disabled={rideHome.where === 'home'}>
					Do domu
				</Button>
				<Button active={whereGo === 'work'} value="work" onClick={() => setWhereGo('work')}>
					Do Pracy
				</Button>
				<Button active={whereGo === 'day-off'} value="home" onClick={() => setWhereGo('day-off')}>
					Dzień wolny
				</Button>
			</div>
		</div>
	)
}

export default Where
