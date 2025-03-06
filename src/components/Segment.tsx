import { Box } from "@react-three/drei";
import { JSX } from "react/jsx-runtime";

const Segment = (props: JSX.IntrinsicElements["group"]) => {
  return (
    <group {...props}>
      <Box args={[5, 0.1, 2]}>
        <meshStandardMaterial color="red" />
      </Box>
    </group>
  );
};

export default Segment;
