import { Box } from "@react-three/drei";
import { SegInfo } from "../Utils/SegmentInfo";

const Segment = ({ length, rotation, xPosition, yPosition }: SegInfo) => {
  return (
    <Box
      args={[length, 0.1, 2]}
      rotation-z={rotation}
      position={[xPosition + 1.5, yPosition, 0]}
    >
      <meshStandardMaterial color="red" />
    </Box>
  );
};

export default Segment;
