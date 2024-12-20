import { messages } from '../lib/dates'

function Smile() {
	const id = new Date().getDate() - 1
	const text = messages[id].message

	return (
		<div className="px-4 flex  flex-col items-center justify-center h-full text-3xl text-center gap-8">
			<p className="text-red-700 text-5xl">❤❤❤</p>
			<p className="leading-[3.2rem]">{text}</p>
			<p className="text-red-700 text-5xl">❤❤❤</p>
		</div>
	)
}

export default Smile
