import Calendary from './components/Calendary'
import Header from './components/Header'
import MonthsModal from './components/Modals'

function App() {
	return (
		<div className="font-open min-h-screen flex flex-col bg-first text-second">
			<Header />
			<main className="  py-8   flex-col h-full flex-1 ">
				<Calendary />
				<MonthsModal />
				{/* <div className="flex items-center justify-between">
					<h2 className="text-center ">Wybierz datę </h2>
					<StyledDatePicker />
				</div> */}
			</main>
		</div>
	)
}

export default App
