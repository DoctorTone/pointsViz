import { Box } from "@react-three/drei";
import { SegInfo } from "../Utils/SegmentInfo";

interface SegmentProps {
  info: SegInfo;
  colour: string;
}

const Segment = ({ info, colour }: SegmentProps) => {
  return (
    <Box
      args={[info.length, 0.1, 2]}
      rotation-z={info.rotation}
      position={[info.xPosition + 1.5, info.yPosition, 0]}
    >
      <meshStandardMaterial color={colour} />
    </Box>
  );
};

export default Segment;
