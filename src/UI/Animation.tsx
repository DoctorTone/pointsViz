import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import IconButton from "@mui/material/IconButton";

const Animation = () => {
  const togglePlay = () => {};

  return (
    <div id="animation" className="panel">
      <IconButton onClick={togglePlay}>
        <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 60 }} />
      </IconButton>
    </div>
  );
};

export default Animation;
