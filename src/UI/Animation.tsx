import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useStore from "../state/store";
import Box from "@mui/material/Box";

const Animation = () => {
  const toggleAnimation = useStore((state) => state.toggleAnimation);
  const animating = useStore((state) => state.animating);

  const togglePlay = () => {
    toggleAnimation();
  };

  return (
    <div id="animation" className="panel centred">
      <Typography variant="subtitle1" color="primary">
        Points
      </Typography>
      {animating ? (
        <IconButton onClick={togglePlay}>
          <PauseCircleOutlineIcon color="primary" sx={{ fontSize: 50 }} />
        </IconButton>
      ) : (
        <IconButton onClick={togglePlay}>
          <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 50 }} />
        </IconButton>
      )}
      <div>
        <Typography variant="subtitle1" color="red">
          <Box className="key red" sx={{ marginRight: 1 }}></Box>
          Season 24-25
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1" color="yellow">
          <Box className="key yellow" sx={{ marginRight: 1 }}></Box>
          Season 23-24
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1" color="green">
          <Box className="key green" sx={{ marginRight: 1 }}></Box>
          Season 22-23
        </Typography>
      </div>
    </div>
  );
};

export default Animation;
