import Typography from "@mui/material/Typography";

const Title = () => {
  return (
    <div id="title" className="panel">
      <Typography variant="h4" sx={{ color: "white" }}>
        Nottingham Forest
      </Typography>
      <Typography variant="h5" sx={{ color: "grey" }}>
        Cumulative Points Total
      </Typography>
    </div>
  );
};

export default Title;
