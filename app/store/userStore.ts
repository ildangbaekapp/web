import { create } from "zustand";

interface UserState {
  id: number;
  email: string;
  name: string;
  role: "jobSeeker" | "employer" | null;

  setId: (id: number) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setRole: (role: "jobSeeker" | "employer" | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  id: 0,
  email: "",
  name: "",
  role: null,

  setId: (id) => set({ id }),
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setRole: (role) => set({ role }),
}));
