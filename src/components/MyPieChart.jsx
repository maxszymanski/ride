import { PieChart, Pie, Cell, Tooltip } from 'recharts'

// const data = [
// 	{ name: 'Z Maksiem', value: 6 },
// 	{ name: 'Busem', value: 7 },
// 	{ name: 'Pociągiem', value: 3 },
// 	{ name: 'Zmienna 4', value: 10 },
// 	{ name: 'Zmienna 5', value: 5 },
// ]

// Kolory dla poszczególnych fragmentów wykresu
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

function MyPieChart({ data }) {
	return (
		<PieChart width={300} height={260}>
			{/* Pie */}
			<Pie data={data} cx="50%" cy="50%" outerRadius={150} innerRadius={110} fill="#8884d8" dataKey="value">
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			{/* Tooltip */}
			{/* <Tooltip /> */}
		</PieChart>
	)
}

export default MyPieChart
