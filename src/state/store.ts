import { create } from "zustand";

interface PointsState {
  show_24_25: boolean;
  showSeason_24_25: (status: boolean) => void;
  show_23_24: boolean;
  showSeason_23_24: (status: boolean) => void;
  show_22_23: boolean;
  showSeason_22_23: (status: boolean) => void;
  backGround: string;
  setBackground: (color: string) => void;
}

const useStore = create<PointsState>((set, get) => ({
  show_24_25: true,
  showSeason_24_25: (status) => set(() => ({ show_24_25: status })),
  show_23_24: true,
  showSeason_23_24: (status) => set(() => ({ show_23_24: status })),
  show_22_23: true,
  showSeason_22_23: (status) => set(() => ({ show_22_23: status })),
  backGround: "#2b2b2b",
  setBackground: (color) => set(() => ({ backGround: color })),
}));

export default useStore;
