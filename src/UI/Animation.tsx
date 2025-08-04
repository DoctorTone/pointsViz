import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useStore from "../state/store";

const Animation = () => {
  const toggleAnimation = useStore((state) => state.toggleAnimation);
  const animating = useStore((state) => state.animating);

  const togglePlay = () => {
    toggleAnimation();
  };

  return (
    <div id="animation" className="panel centred">
      <Typography variant="h6" color="primary">
        Points
      </Typography>
      {animating ? (
        <IconButton onClick={togglePlay}>
          <PauseCircleOutlineIcon color="primary" sx={{ fontSize: 60 }} />
        </IconButton>
      ) : (
        <IconButton onClick={togglePlay}>
          <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 60 }} />
        </IconButton>
      )}
    </div>
  );
};

export default Animation;
