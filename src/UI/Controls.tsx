import { useControls } from "leva";
import useStore from "../state/store";

const Controls = () => {
  const showSeason_24_25 = useStore((state) => state.showSeason_24_25);
  const showSeason_23_24 = useStore((state) => state.showSeason_23_24);
  const showSeason_22_23 = useStore((state) => state.showSeason_22_23);
  const showSeason_Villa = useStore((state) => state.showSeason_Villa);
  const showSeason_Newcastle = useStore((state) => state.showSeason_Newcastle);
  const setBackground = useStore((state) => state.setBackground);

  const data = useControls({
    "Season 24/25": true,
    "Season 23/24": true,
    "Season 22/23": true,
    "Villa 23/24": false,
    "Newcastle 22/23": false,
    backGround: "#2b2b2b",
  });

  showSeason_24_25(data["Season 24/25"]);
  showSeason_23_24(data["Season 23/24"]);
  showSeason_22_23(data["Season 22/23"]);
  showSeason_Villa(data["Villa 23/24"]);
  showSeason_Newcastle(data["Newcastle 22/23"]);
  setBackground(data.backGround);

  return null;
};

export default Controls;
