import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Title = () => {
  return (
    <Box
      id="title"
      className="panel w-100"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          mr: 2,
        }}
      >
        Nottingham Forest
      </Typography>
      <img className="thumbnail" src="./Images/forest.png" />
    </Box>
  );
};

export default Title;
