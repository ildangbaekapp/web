import type { Filters } from "job";
import { create } from "zustand";

interface SearchState {
  query: string;
  filter: Filters;

  setQuery: (query: string) => void;
  setFilter: (filter: Partial<Filters>) => void;
  resetFilter: () => void;
}

export const initialFilter: Filters = {
  type: null,
  career: null,
  weekday: null,
  salary: null,
  time: null,
  recruitLocation: null,
  duration: null,
  workLocation: null,
};

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  filter: initialFilter,

  setQuery: (query) => set({ query }),
  setFilter: (filter) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),
  resetFilter: () => set({ filter: initialFilter }),
}));
