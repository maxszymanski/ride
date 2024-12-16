import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import History from './pages/History'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Information from './components/Information'
import Stats from './pages/Stats'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="history" element={<History />} />
						<Route path="stats" element={<Stats />} />
						<Route path="/" element={<HomePage />}>
							<Route path=":date" element={<Information />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
