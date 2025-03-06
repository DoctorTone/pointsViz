import { Box, Stage } from "@react-three/drei";
import { DoubleSide } from "three";

const Graph = () => {
  return (
    <Box args={[5, 0.1, 2]}>
      <meshStandardMaterial color="red" side={DoubleSide} />
    </Box>
  );
};

export default Graph;
