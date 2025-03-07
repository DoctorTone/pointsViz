import { useControls } from "leva";

const Controls = () => {
  const { season2425, season2324 } = useControls({
    "Season 24/25": true,
    "Season 23/24": true,
  });

  return null;
};

export default Controls;
