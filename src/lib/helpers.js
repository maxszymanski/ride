export function generateDaysForMonth(year, month) {
	const daysInMonth = new Date(year, month + 1, 0).getDate()
	const days = []

	for (let day = 2; day <= daysInMonth + 1; day++) {
		const date = new Date(year, month, day)
		days.push({
			date: date.toISOString().split('T')[0],
			day,
			dateDay: date.getDay(),
		})
	}

	return days
}


