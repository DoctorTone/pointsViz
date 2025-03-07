import { Html } from "@react-three/drei";
import Typography from "@mui/material/Typography";

const Points = () => {
  return (
    <>
      <Html position={[0, 70, 0]}>
        <Typography variant="h5" sx={{ color: "grey" }}>
          Points
        </Typography>
      </Html>
    </>
  );
};

export default Points;
