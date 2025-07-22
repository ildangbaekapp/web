import { create } from "zustand";

import * as Filter from "~/types/filter";

export interface Filters {
  type: Filter.Type[] | null;
  carreer: Filter.Carreer | null;
  weekday: Filter.Weekday[] | null;
  salary: Filter.Salary | null;
  time: Filter.Time | "negotiable" | null;
  recruitLocation: Filter.RecruitLocation[] | null;
  duration: Filter.duration | "negotiable" | null;
  workLocation: Filter.WorkLocation[] | null;
}

interface SearchState {
  query: string;
  filter: Filters;

  setQuery: (query: string) => void;
  setFilter: (filter: Partial<Filters>) => void;
  resetFilter: () => void;
}

export const initialFilter: Filters = {
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
  setFilter: (filter) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),
  resetFilter: () => set({ filter: initialFilter }),
}));
