import { create } from "zustand";

interface PointsState {
  show_24_25: boolean;
  showSeason_24_25: (status: boolean) => void;
  show_23_24: boolean;
  showSeason_23_24: (status: boolean) => void;
}

const useStore = create<PointsState>((set, get) => ({
  show_24_25: true,
  showSeason_24_25: (status) => set(() => ({ show_24_25: status })),
  show_23_24: true,
  showSeason_23_24: (status) => set(() => ({ show_23_24: status })),
}));

export default useStore;
