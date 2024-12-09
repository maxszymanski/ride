import useDateStore from '../store'
import { Button } from './Buttons'

function WithWho() {
	const whereGo = useDateStore(state => state.whereGo)
	const withWho = useDateStore(state => state.withWho)
	const setWithWho = useDateStore(state => state.setWithWho)

	const handleSetWith = val => {
		setWithWho(val)
	}

	return (
		<div className="px-4 my-8 ">
			<h2 className="text-xl font-thin mb-8">Jak jedziemy?</h2>
			<div className="flex items-center justify-center gap-4 w-full flex-wrap">
				<Button active={withWho === 'train'} value="train" onClick={() => handleSetWith('train')}>
					Pociąg
				</Button>

				<Button active={withWho === 'max'} value="max" onClick={() => handleSetWith('max')}>
					Maksiu
				</Button>
				{whereGo === 'home' && (
					<Button active={withWho === 'mix'} value="mix" onClick={() => handleSetWith('mix')}>
						Zielonki
					</Button>
				)}

				<Button active={withWho === 'bus'} value="bus" onClick={() => handleSetWith('bus')}>
					Bus
				</Button>
			</div>
		</div>
	)
}

export default WithWho
