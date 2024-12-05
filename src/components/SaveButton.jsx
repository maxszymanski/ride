import useDateStore from '../store'
import { SecondButton } from './Buttons'

function SaveButton() {
	const setIsSaveModalOpen = useDateStore(state => state.setIsSaveModalOpen)
	return (
		<div className="w-full flex justify-center mt-16">
			<SecondButton variant="text-2xl py-3 px-16" onClick={() => setIsSaveModalOpen()}>
				Zapisz
			</SecondButton>
		</div>
	)
}

export default SaveButton
