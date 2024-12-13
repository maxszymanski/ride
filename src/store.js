import { create } from 'zustand'

const useDateStore = create(set => ({
	month: new Date().getMonth(),
	year: new Date().getFullYear(),
	historyMonth: new Date().getMonth(),
	historyYear: new Date().getFullYear(),
	active: new Date().toISOString().split('T')[0],
	isMonthsModalOpen: false,
	isYearsModalOpen: false,
	isHistoryMonthsModalOpen: false,
	isHistoryYearsModalOpen: false,
	isSaveModalOpen: false,
	whereGo: 'work',
	withWho: 'max',
	price: 9,

	setNewYear: newYear => set(() => ({ year: newYear })),
	setNewMonth: newMonth => set(() => ({ month: newMonth })),
	setNewHistoryYear: newYear => set(() => ({ historyYear: newYear })),
	setNewHistoryMonth: newMonth => set(() => ({ historyMonth: newMonth })),
	setActive: newDate => set(() => ({ active: newDate })),
	setIsMonthsModalOpen: () => set(state => ({ isMonthsModalOpen: !state.isMonthsModalOpen })),
	setIsYearsModalOpen: () => set(state => ({ isYearsModalOpen: !state.isYearsModalOpen })),
	setIsHistoryMonthsModalOpen: () => set(state => ({ isHistoryMonthsModalOpen: !state.isHistoryMonthsModalOpen })),
	setIsHistoryYearsModalOpen: () => set(state => ({ isHistoryYearsModalOpen: !state.isHistoryYearsModalOpen })),
	setIsSaveModalOpen: () => set(state => ({ isSaveModalOpen: !state.isSaveModalOpen })),
	setWhereGo: goTo => set({ whereGo: goTo }),
	setWithWho: goWith => set({ withWho: goWith }),
}))

export default useDateStore
