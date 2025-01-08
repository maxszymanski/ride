import supabase from './supabase'

export async function setRide(newRide) {
	const { data, error } = await supabase.from('ride').insert([newRide]).select('*')
	if (error) throw new Error('Błąd wysyłania danych')
	return data
}

export async function getRides() {
	const { data, error } = await supabase.from('ride').select('*')
	if (error) throw new Error('Błąd pobierania danych')
	return data
}
export async function getRideForDay(date) {
	const { data, error } = await supabase.from('ride').select('*').eq('date', date)
	if (error) throw new Error('Błąd pobierania danych')
	return data
}
export async function getHistoryRideByDate(date) {
	const { data, error } = await supabase
		.from('ride')
		.select('*')
		.like('date', date)
		.order('date', { ascending: true })
		.order('where', { ascending: true })
	if (error) throw new Error('Błąd pobierania danych')
	return data
}

export async function login({ email, password }) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})
	if (error) {
		console.error('Logowanie nieudane:', error.message)
		throw new Error('Logowanie nieudane')
	}
	return data
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession()
	if (!session.session) return null

	const { data, error } = await supabase.auth.getUser()
	if (error) throw new Error(error.message)
	return data?.user
}
