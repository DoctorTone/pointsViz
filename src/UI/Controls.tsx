import { useControls } from "leva";
import useStore from "../state/store";

const Controls = () => {
  const showSeason_24_25 = useStore((state) => state.showSeason_24_25);
  const showSeason_23_24 = useStore((state) => state.showSeason_23_24);
  const showSeason_22_23 = useStore((state) => state.showSeason_22_23);
  const showSeason_09_10 = useStore((state) => state.showSeason_09_10);
  const showSeason_10_11 = useStore((state) => state.showSeason_10_11);
  const showSeason_Villa = useStore((state) => state.showSeason_Villa);
  const showSeason_Newcastle = useStore((state) => state.showSeason_Newcastle);
  const showSeason_Derby = useStore((state) => state.showSeason_Derby);
  const setBackground = useStore((state) => state.setBackground);

  useControls({
    "Season 24/25": {
      value: true,
      onChange: (v) => {
        showSeason_24_25(v);
      },
    },
    "Season 23/24": {
      value: true,
      onChange: (v) => {
        showSeason_23_24(v);
      },
    },
    "Season 22/23": {
      value: true,
      onChange: (v) => {
        showSeason_22_23(v);
      },
    },
    "Season 09/10": {
      value: false,
      onChange: (v) => {
        showSeason_09_10(v);
      },
    },
    "Season 10/11": {
      value: false,
      onChange: (v) => {
        showSeason_10_11(v);
      },
    },
    "Villa 23/24": {
      value: false,
      onChange: (v) => {
        showSeason_Villa(v);
      },
    },
    "Newcastle 22/23": {
      value: false,
      onChange: (v) => {
        showSeason_Newcastle(v);
      },
    },
    "Derby 07/08": {
      value: false,
      onChange: (v) => {
        showSeason_Derby(v);
      },
    },
    backGround: {
      value: "#2b2b2b",
      onChange: (colour) => {
        setBackground(colour);
      },
    },
  });

  return null;
};

export default Controls;
