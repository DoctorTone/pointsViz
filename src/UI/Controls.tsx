import { useControls } from "leva";
import useStore from "../state/store";

const Controls = () => {
  const showSeason_24_25 = useStore((state) => state.showSeason_24_25);
  const showSeason_23_24 = useStore((state) => state.showSeason_23_24);

  const data = useControls({
    "Season 24/25": true,
    "Season 23/24": true,
  });

  showSeason_24_25(data["Season 24/25"]);
  showSeason_23_24(data["Season 23/24"]);

  return null;
};

export default Controls;
