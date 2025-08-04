import { create } from "zustand";
import type { ScreenSize } from "./Config";

interface PointsState {
  show_24_25: boolean;
  showSeason_24_25: (status: boolean) => void;
  show_23_24: boolean;
  showSeason_23_24: (status: boolean) => void;
  show_22_23: boolean;
  showSeason_22_23: (status: boolean) => void;
  show_villa: boolean;
  showSeason_Villa: (status: boolean) => void;
  show_newcastle: boolean;
  showSeason_Newcastle: (status: boolean) => void;
  show_derby: boolean;
  showSeason_Derby: (status: boolean) => void;
  show_09_10: boolean;
  showSeason_09_10: (status: boolean) => void;
  show_10_11: boolean;
  showSeason_10_11: (status: boolean) => void;
  backGround: string;
  setBackground: (color: string) => void;
  animating: boolean;
  toggleAnimation: () => void;
  screenSize: ScreenSize;
  setScreenSize: (size: ScreenSize) => void;
}

const useStore = create<PointsState>((set) => ({
  show_24_25: true,
  showSeason_24_25: (status) => set(() => ({ show_24_25: status })),
  show_23_24: true,
  showSeason_23_24: (status) => set(() => ({ show_23_24: status })),
  show_22_23: true,
  showSeason_22_23: (status) => set(() => ({ show_22_23: status })),
  show_villa: false,
  showSeason_Villa: (status) => set(() => ({ show_villa: status })),
  show_newcastle: false,
  showSeason_Newcastle: (status) => set(() => ({ show_newcastle: status })),
  show_derby: false,
  showSeason_Derby: (status) => set(() => ({ show_derby: status })),
  show_09_10: false,
  showSeason_09_10: (status) => set(() => ({ show_09_10: status })),
  show_10_11: false,
  showSeason_10_11: (status) => set(() => ({ show_10_11: status })),
  backGround: "#2b2b2b",
  setBackground: (color) => set(() => ({ backGround: color })),
  animating: false,
  toggleAnimation: () => set((state) => ({ animating: !state.animating })),
  screenSize: { width: window.innerWidth, height: window.innerHeight },
  setScreenSize: (size) =>
    set((state) => ({ screenSize: { ...state.screenSize, ...size } })),
}));

export default useStore;
