import Calendary from './components/Calendary'
import Header from './components/Header'
import SaveButton from './components/SaveButton'
import SaveModal from './components/SaveModal'
import Where from './components/Where'
import WithWho from './components/WithWho'
import useDateStore from './store'

function App() {
	const isSaveModalOpen = useDateStore(state => state.isSaveModalOpen)

	return (
		<div className={`font-open min-h-screen flex flex-col bg-first text-second relative `}>
			<Header />
			<main className="  py-8  flex-col h-full flex-1 ">
				<Calendary />
				<Where />
				<WithWho />
				<SaveButton />

				{/* <div className="flex items-center justify-between">
					<h2 className="text-center ">Wybierz datę </h2>
					<StyledDatePicker />
				</div> */}
			</main>
			{isSaveModalOpen && <SaveModal />}
		</div>
	)
}

export default App
