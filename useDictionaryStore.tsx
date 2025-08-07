import { create } from 'zustand'

interface DictionaryEntry {
  word: string;
  phonetics: any[];
  meanings: any[];
  license: { name: string; url: string };
  sourceUrls: string[];
}

interface DictionaryState {
  word: string | null;
  setWord: (word: string) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;

  dictionary: DictionaryEntry[];
  setDictionary: (value: DictionaryEntry[]) => void;

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
  setDictionary: (value: DictionaryEntry[]) => set({ dictionary: value }),

  theme: "dark",
  setTheme: (theme: string) => set({ theme }),

  fontStyle: "serif",
  setFontStyle: (style: string) => set({ fontStyle: style }),
}))