import { useEffect, useRef } from 'react'
import { generateDaysForMonth } from '../lib/helpers'
import { DateButton, SecondButton } from './Buttons'
import useDateStore from '../store'
import { allMonths } from '../lib/dates'


function Calendary() {
	const { year, month, active, setActive } = useDateStore()
	const containerRef = useRef(null)
	const buttonRefs = useRef({})

	const days = generateDaysForMonth(year, month)

	const daysName = {
		2: 'Pon',
		3: 'Wto',
		4: 'Śro',
		5: 'Czw',
		6: 'Pią',
		0: 'Sob',
		1: 'Nie',
	}

	const handleSetDate = e => {
		setActive(e.currentTarget.value)
	}

	useEffect(() => {
		if (buttonRefs.current[active]) {
			buttonRefs.current[active]?.scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
			})
		}
	}, [active])

	return (
		<div>
			<SecondButton>{allMonths[month]}</SecondButton>

			<div ref={containerRef} className="flex items-center gap-6 w-full overflow-x-auto p-4 my-4">
				{' '}
				{days.map(d => {
					return (
						<DateButton
							key={d.date}
							active={active === d.date}
							value={d.date}
							onClick={handleSetDate}
							ref={el => (buttonRefs.current[d.date] = el)}>
							<span>{daysName[d.dateDay]}</span>
							<span className="block">{d.date.split('-').reverse().join('-').slice(0, 5)}</span>
						</DateButton>
					)
				})}
			</div>
		</div>
	)
}

export default Calendary
