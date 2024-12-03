import Header from './components/Header'
import StyledDatePicker from './components/StyledDatePicker'

function App() {
	return (
		<div className="font-open min-h-screen flex flex-col bg-stone-50">
			<Header />
			<main className="  py-8  px-6 flex-col h-full flex-1">
				<div className="flex items-center justify-between">
					<h2 className="text-center ">Wybierz datę </h2>
					<StyledDatePicker />
				</div>
			</main>
		</div>
	)
}

export default App
