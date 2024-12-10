import { useEffect, useRef } from 'react'
import { generateDaysForMonth } from '../lib/helpers'
import { DateButton, SecondButton } from './Buttons'
import useDateStore from '../store'
import { allMonths } from '../lib/dates'
import MonthsModal from './MonthsModal'
import YearsModal from './YearsModal'
import { useNavigate } from 'react-router'

function Calendary() {
	const navigate = useNavigate()
	const {
		year,
		month,
		active,
		setActive,
		isMonthsModalOpen,
		setIsMonthsModalOpen,
		isYearsModalOpen,
		setIsYearsModalOpen,
	} = useDateStore()
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
		const value = e.currentTarget.value
		setActive(value)
		navigate(`/${value}`)
	}

	const handleOpenMonthsModal = () => {
		setIsMonthsModalOpen()
		if (isYearsModalOpen) setIsYearsModalOpen()
	}
	const handleOpenYearsModal = () => {
		setIsYearsModalOpen()
		if (isMonthsModalOpen) setIsMonthsModalOpen()
	}

	useEffect(() => {
		if (buttonRefs.current[active]) {
			buttonRefs.current[active]?.scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
				block: 'nearest',
			})
		}
	}, [active])

	return (
		<div>
			<div className="relative py-2 px-4 flex items-center justify-between">
				<SecondButton onClick={handleOpenMonthsModal} variant="min-w-48">
					{allMonths[month]}
				</SecondButton>
				<SecondButton onClick={handleOpenYearsModal} variant="">
					{year}
				</SecondButton>
				{isMonthsModalOpen && <MonthsModal />}
				{isYearsModalOpen && <YearsModal />}
			</div>

			<div ref={containerRef} className="flex items-center gap-6 w-full overflow-x-auto p-4 my-4 ">
				{' '}
				{days.map(d => {
					return (
						<DateButton
							to={`/${d.date}`}
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
