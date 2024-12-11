import useDateStore from '../store'
import { SecondButton } from './Buttons'

function SaveButton({ chooseWhereGo }) {
	const setIsSaveModalOpen = useDateStore(state => state.setIsSaveModalOpen)
	return (
		<div className="w-full flex justify-center mt-16">
			<SecondButton variant="text-2xl py-3 px-16" onClick={() => setIsSaveModalOpen()} disabled={chooseWhereGo}>
				{chooseWhereGo ? 'Wybierz przejazd' : 'Zapisz'}
			</SecondButton>
		</div>
	)
}

export default SaveButton
