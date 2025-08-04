import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useStore from "../state/store";

const Animation = () => {
  const toggleAnimation = useStore((state) => state.toggleAnimation);

  const togglePlay = () => {
    toggleAnimation();
  };

  return (
    <div id="animation" className="panel centred">
      <Typography variant="h6" color="primary">
        Points
      </Typography>
      <IconButton onClick={togglePlay}>
        <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 60 }} />
      </IconButton>
    </div>
  );
};

export default Animation;
