import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

const Title = () => {
  return (
    <div id="title" className="panel">
      <Grid container>
        <Grid size={10} sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Nottingham Forest
          </Typography>
        </Grid>
        <Grid size={2}>
          <img className="w-50" src="./Images/forest.png" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Title;
