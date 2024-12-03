import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function StyledDatePicker() {
	const [selectedDate, setSelectedDate] = useState(new Date())

	// const handleSubmit = () => {
	// 	if (selectedDate) {
	// 		const formattedDate = selectedDate.toLocaleDateString('pl-PL', {
	// 			day: '2-digit',
	// 			month: '2-digit',
	// 			year: 'numeric',
	// 		})
	// 		console.log(formattedDate)
	// 	}
	// }

	return (
		<DatePicker
			selected={selectedDate}
			onChange={date => setSelectedDate(date)}
			dateFormat="yyyy-MM-dd"
			placeholderText="Select a date"
			className="w-full  p-3 border border-stone-900 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-800 focus:border-stone-800"
			calendarClassName="bg-white rounded-lg shadow-md"
			dayClassName={date => (date.getDay() === 0 || date.getDay() === 6 ? 'text-red-500' : undefined)}
		/>
	)
}

export default StyledDatePicker
