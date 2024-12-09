import { useSetNewRide } from '../hooks/useSetNewRide'
import useDateStore from '../store'
import { SecondButton } from './Buttons'

function SaveModal() {
	const activeData = useDateStore(state => state.active)
	const whereGo = useDateStore(state => state.whereGo)
	const withWho = useDateStore(state => state.withWho)
	const price = useDateStore(state => state.price)
	const setIsSaveModalOpen = useDateStore(state => state.setIsSaveModalOpen)
	const { addRide } = useSetNewRide()

	const withWhoGo =
		withWho === 'train'
			? 'Pociąg'
			: withWho === 'max'
			? 'Maksiu'
			: withWho === 'bus'
			? 'Bus'
			: withWho === 'mix'
			? 'Bus + Maksiu'
			: ''

	const currentPrice = withWho === 'mix' ? `5zł + 4zł` : `${price}zł`

	const handleSaveRide = () => {
		const newRide = {
			date: activeData,
			who: withWho,
			where: whereGo,
			price,
		}
		addRide(newRide)
	}
	return (
		<div className="absolute w-full h-full min-h-screen top-0 left-0 bg-second/70 flex items-center justify-center px-2">
			<div className="border border-third shadow-md shadow-third p-6 gap-6 flex flex-col bg-third rounded-xl overflow-hidden">
				<p className="text-center font-semibold text-2xl">Potwierdź podróż</p>
				<div className="flex flex-col gap-1.5 px-2 text-lg">
					<p>
						Data: <span className="font-bold">{activeData}</span>
					</p>
					<p>
						Droga: <span className="font-bold">{whereGo === 'work' ? 'Do Pracy' : 'Do domu'}</span>
					</p>
					<p>
						Podróż: <span className="font-bold">{withWhoGo}</span>
					</p>
					<p>
						Cena: <span className="font-bold">{currentPrice}</span>
					</p>
				</div>
				<div className="flex items-center justify-between gap-5">
					<SecondButton variant="text-lg" onClick={handleSaveRide}>
						Potwierdź
					</SecondButton>
					<SecondButton variant="bg-red-600 text-lg" onClick={() => setIsSaveModalOpen()}>
						Anuluj
					</SecondButton>
				</div>
			</div>
		</div>
	)
}

export default SaveModal
