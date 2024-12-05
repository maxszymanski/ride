import { create } from 'zustand'

const useDateStore = create(set => ({
	month: new Date().getMonth(),
	year: new Date().getFullYear(),
	active: new Date().toISOString().split('T')[0],
	isMonthsModalOpen: false,
	isYearsModalOpen: false,
	isSaveModalOpen: false,
	whereGo: 'work',
	withWho: 'max',
	price: 9,

	setNewYear: newYear => set(() => ({ year: newYear })),
	setNewMonth: newMonth => set(() => ({ month: newMonth })),
	setActive: newDate => set(() => ({ active: newDate })),
	setIsMonthsModalOpen: () => set(state => ({ isMonthsModalOpen: !state.isMonthsModalOpen })),
	setIsYearsModalOpen: () => set(state => ({ isYearsModalOpen: !state.isYearsModalOpen })),
	setIsSaveModalOpen: () => set(state => ({ isSaveModalOpen: !state.isSaveModalOpen })),
	setWhereGo: goTo => set({ whereGo: goTo }),
	setWithWho: goWith => set({ withWho: goWith }),
	setPrice: pr => set({ price: pr }),
}))

export default useDateStore
