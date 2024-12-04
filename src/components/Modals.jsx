import { allMonths } from '../lib/dates'

export default function MonthsModal() {
	return (
		<div className="flex justify-center items-center bg-second/70  absolute top-0 left-0 w-full h-full ">
			<div className="flex flex-col  items-center border-second   border rounded-2xl  overflow-x-hidden overflow-y-auto max-h-screen shadow-xl shadow-second">
				{allMonths.map(month => (
					<button
						className="text-xl px-20 py-2 bg-second  odd:bg-first w-full text-first odd:text-second"
						value={month}
						key={month}>
						{month}
					</button>
				))}
			</div>
		</div>
	)
}
