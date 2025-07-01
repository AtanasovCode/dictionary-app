import { create } from 'zustand'

interface DictionaryState {
  bears: number
  increase: (by: number) => void
}

export const useDictionaryStore = create<DictionaryState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))