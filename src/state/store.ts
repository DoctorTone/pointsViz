import { create } from "zustand";

interface PointsState {
  show_24_25: boolean;
  showSeason_24_25: (status: boolean) => void;
}

const useStore = create<PointsState>((set, get) => ({
  show_24_25: true,
  showSeason_24_25: (status) => set(() => ({ show_24_25: status })),
}));

export default useStore;
