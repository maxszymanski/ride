import useDateStore from '../store'
import { Button } from './Buttons'

function WithWho() {
	const whereGo = useDateStore(state => state.whereGo)
	const withWho = useDateStore(state => state.withWho)
	const setWithWho = useDateStore(state => state.setWithWho)
	const setPrice = useDateStore(state => state.setPrice)

	const handleSetWith = (val, price) => {
		setWithWho(val)
		setPrice(price)
	}

	return (
		<div className="px-4 my-8 ">
			<h2 className="text-xl font-thin mb-8">Jak jedziemy?</h2>
			<div className="flex items-center justify-center gap-4 w-full flex-wrap">
				<Button active={withWho === 'train'} value="train" onClick={() => handleSetWith('train', 9)}>
					Pociąg
				</Button>

				<Button active={withWho === 'max'} value="max" onClick={() => handleSetWith('max', 9)}>
					Maksiu
				</Button>
				{whereGo === 'home' && (
					<Button active={withWho === 'mix'} value="mix" onClick={() => handleSetWith('mix', 9)}>
						Zielonki
					</Button>
				)}

				<Button active={withWho === 'bus'} value="bus" onClick={() => handleSetWith('bus', 9)}>
					Bus
				</Button>
			</div>
		</div>
	)
}

export default WithWho
