import { create } from "zustand";

import * as Filter from "~/types/filter";

interface Filter {
  type: Filter.Type[] | null;
  carreer: Filter.Carreer | null;
  weekday: Filter.Weekday[] | null;
  salary: Filter.Salary | null;
  time: Filter.Time | null;
  recruitLocation: Filter.RecruitLocation | null;
  duration: Filter.duration | null;
  workLocation: Filter.WorkLocation | null;
}

interface SearchState {
  query: string;
  filter: Filter;

  setQuery: (query: string) => void;
  setFilter: (filter: Partial<Filter>) => void;
  resetFilter: () => void;
}

const initialFilter: Filter = {
  type: null,
  carreer: null,
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
  setFilter: (filter) => set((state) => ({ filter: { ...state.filter, ...filter } })),
  resetFilter: () => set({ filter: initialFilter }),
}));
