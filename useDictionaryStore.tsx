import { create } from 'zustand'

interface DictionaryState {
  word: string | null;
  setWord: (word: string) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;

  dictionary: string[];
  setDictionary: (value: string[]) => void;

  theme: string;
  setTheme: (theme: string) => void;

  fontStyle: string;
  setFontStyle: (style: string) => void;
}

export const useDictionaryStore = create<DictionaryState>()((set) => ({
  word: null,
  setWord: (word: string) => set({ word }),

  loading: false,
  setLoading: (loading: boolean) => set({ loading }),

  dictionary: [],
  setDictionary: (value: string[]) => set({ dictionary: value }),

  theme: "dark",
  setTheme: (theme: string) => set({ theme }),

  fontStyle: "serif",
  setFontStyle: (style: string) => set({ fontStyle: style }),
}))