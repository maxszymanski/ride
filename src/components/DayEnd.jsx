function DayEnd({ ride }) {
	return (
		<div className=" px-6 my-6 flex-1 flex flex-col items-center justify-center">
			<p className="text-center my-6 text-2xl">
				<span className="font-bold">{ride[0]?.date.split('-').reverse().join('-')}</span>
			</p>
			<div className="flex justify-between mt-12 w-full">
				{ride.map(r => {
					const { where, who, price, id } = r

					if (where === 'day-off')
						return (
							<div className=" text-center text-2xl w-full" key={id}>
								<p className="mb-4">Dzień wolny!</p>
								<p>Miłego odpoczynku! ❤</p>
							</div>
						)

					const withWhoGo =
						who === 'train'
							? 'Pociąg'
							: who === 'max'
							? 'Maksiu'
							: who === 'bus'
							? 'Bus'
							: who === 'mix'
							? 'Bus + Maksiu'
							: ''

					return (
						<div className="flex flex-col gap-1" key={id}>
							<p>
								Droga: <span className="font-bold">{where === 'work' ? 'Do Pracy' : 'Do domu'}</span>
							</p>
							<p>
								Podróż: <span className="font-bold">{withWhoGo}</span>
							</p>
							<p>
								Cena: <span className="font-bold">{who === 'mix' ? '4zł + 5zł' : `${price}zł`}</span>
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default DayEnd
