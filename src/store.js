import { create } from 'zustand'

const useDateStore = create(set => ({
	month: new Date().getMonth(),
	year: new Date().getFullYear(),
	active: new Date().toISOString().split('T')[0],

	setNewYear: newYear => set(state => ({ ...state, year: newYear })),
	setNewMonth: newMonth => set(state => ({ ...state, month: newMonth })),
	setActive: newDate => set(state => ({ ...state, active: newDate })),
}))

export default useDateStore
