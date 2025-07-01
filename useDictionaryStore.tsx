import { create } from 'zustand'

interface DictionaryState {
  word: string | null;
  setWord: (word: string) => void;
}

export const useDictionaryStore = create<DictionaryState>()((set) => ({
  word: null,
  setWord: (word: string) => set({ word }),
}))