import { Box } from "@react-three/drei";

const Timeline = () => {
  return (
    <Box args={[100, 0.1, 0.5]} position-x={50}>
      <meshStandardMaterial color={"yellow"} />
    </Box>
  );
};

export default Timeline;
