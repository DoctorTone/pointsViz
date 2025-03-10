import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

const Title = () => {
  return (
    <div id="title" className="panel">
      <Grid container>
        <Grid size={8} sx={{ mt: 1, textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Nottingham Forest
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            Cumulative Points Total
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
