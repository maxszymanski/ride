import useDateStore from '../store'
import { Button } from './Buttons'

function Where({ rideHome, rideWork }) {
	const whereGo = useDateStore(state => state.whereGo)
	const setWhereGo = useDateStore(state => state.setWhereGo)

	return (
		<div className="px-4 my-6">
			<h2 className="text-xl font-thin mb-8">Gdzie jedziemy? </h2>
			<div className="flex items-center justify-center gap-4 w-full ">
				<Button
					active={whereGo === 'home' && !rideHome}
					value="home"
					onClick={() => setWhereGo('home')}
					disabled={rideHome}>
					Do domu
				</Button>
				<Button
					active={whereGo === 'work' && !rideWork}
					value="work"
					onClick={() => setWhereGo('work')}
					disabled={rideWork}>
					Do Pracy
				</Button>
				<Button
					active={whereGo === 'day-off'}
					value="home"
					onClick={() => setWhereGo('day-off')}
					disabled={rideWork || rideHome}>
					Dzień wolny
				</Button>
			</div>
		</div>
	)
}

export default Where
