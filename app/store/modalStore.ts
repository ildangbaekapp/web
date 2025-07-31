import { create } from "zustand";

type ModalState = "search" | "filter" | null;

interface ModalStore {
  modalState: ModalState;
  setModalState: (modalState: ModalState) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalState: null,
  setModalState: (modalState) => set({ modalState }),
}));
