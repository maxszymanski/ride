import useDateStore from '../store'
import { Button } from './Buttons'

function Where() {
	const whereGo = useDateStore(state => state.whereGo)
	const setWhereGo = useDateStore(state => state.setWhereGo)
	return (
		<div className="px-4 my-6">
			<h2 className="text-xl font-thin mb-8">Gdzie jedziemy?</h2>
			<div className="flex items-center justify-center gap-8 w-full ">
				<Button active={whereGo === 'work'} value="work" onClick={() => setWhereGo('work')}>
					Do Pracy
				</Button>
				<Button active={whereGo === 'home'} value="home" onClick={() => setWhereGo('home')}>
					Do domu
				</Button>
			</div>
		</div>
	)
}

export default Where
