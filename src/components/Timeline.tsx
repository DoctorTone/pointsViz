import { Html } from "@react-three/drei";
import Typography from "@mui/material/Typography";

const Timeline = () => {
  return (
    <>
      <Html position={[38 * 3, 0, 0]} transform={false} occlude={true}>
        <Typography variant="h5" sx={{ color: "grey" }}>
          Matches
        </Typography>
      </Html>
      <Html position={[15, 0, 0]} transform={false} occlude={true}>
        <Typography variant="h6" sx={{ color: "grey" }}>
          5
        </Typography>
      </Html>
      <Html position={[30, 0, 0]} transform={false} occlude={true}>
        <Typography variant="h6" sx={{ color: "grey" }}>
          10
        </Typography>
      </Html>
      <Html position={[45, 0, 0]} transform={false} occlude={true}>
        <Typography variant="h6" sx={{ color: "grey" }}>
          15
        </Typography>
      </Html>
    </>
  );
};

export default Timeline;
