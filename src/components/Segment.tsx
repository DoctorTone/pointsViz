import { Box } from "@react-three/drei";
import { SegInfo } from "../Utils/SegmentInfo";

interface SegmentProps {
  info: SegInfo;
  visible: boolean;
  colour: string;
}

const Segment = ({ info, visible, colour }: SegmentProps) => {
  // DEBUG
  console.log("Visible = ", visible);
  return (
    <Box
      args={[info.length, 0.1, 2]}
      rotation-z={info.rotation}
      position={[info.xPosition + 1.5, info.yPosition, 0]}
      visible={visible}
    >
      <meshStandardMaterial color={colour} />
    </Box>
  );
};

export default Segment;
