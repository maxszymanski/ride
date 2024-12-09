import supabase from './supabase'

export async function setRide(newRide) {
	const { data, error } = await supabase.from('ride').insert([newRide]).select()
	if (error) throw new Error('Błąd wysyłania danych')
	return data
}

export async function getRides() {
	const { data, error } = await supabase.from('ride').select('*')
	if (error) throw new Error('Błąd pobierania danych')
	return data
}