import { Box } from "@react-three/drei";

const Points = () => {
  return (
    <Box args={[0.1, 70, 0.5]} position-y={35}>
      <meshStandardMaterial color={"grey"} />
    </Box>
  );
};

export default Points;
