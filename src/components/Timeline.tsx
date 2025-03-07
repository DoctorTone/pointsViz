import { Box } from "@react-three/drei";

const Timeline = () => {
  return (
    <Box args={[38 * 3, 0.1, 0.5]} position-x={(38 * 3) / 2}>
      <meshStandardMaterial color={"grey"} />
    </Box>
  );
};

export default Timeline;
